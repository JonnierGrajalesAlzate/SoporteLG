import pool from "../config/database.js";

export const crearTicket = async (req, res) => {
    try {

        const {
            titulo,
            descripcion,
            categoria_id,
            prioridad_id,
            usuario_id
        } = req.body;

        // Buscar técnico para la categoría

        const tecnicoResult = await pool.query(
            `
            SELECT tecnico_id
            FROM categorias_tecnicos
            WHERE categoria_id = $1
            ORDER BY RANDOM()
            LIMIT 1
            `,
            [categoria_id]
        );

        if (tecnicoResult.rows.length === 0) {

            return res.status(400).json({
                success: false,
                message:
                    "No hay técnicos asignados para esta categoría"
            });

        }

        const tecnico_id =
            tecnicoResult.rows[0].tecnico_id;

        // Crear ticket

        const result = await pool.query(
            `
            INSERT INTO tickets (
                titulo,
                descripcion,
                categoria_id,
                prioridad_id,
                usuario_id,
                tecnico_id,
                estado_id,
                fecha_creacion
            )
            VALUES (
                $1,$2,$3,$4,$5,$6,1,NOW()
            )
            RETURNING *
            `,
            [
                titulo,
                descripcion,
                categoria_id,
                prioridad_id,
                usuario_id,
                tecnico_id
            ]
        );

        res.status(201).json({
            success: true,
            message: "Ticket creado correctamente",
            ticket: result.rows[0]
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Error al crear ticket"
        });

    }
};