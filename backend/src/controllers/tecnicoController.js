import pool from "../config/database.js";

export const getMisTicketsTecnico = async (req, res) => {
    try {

        const { tecnicoId } = req.params;

        const result = await pool.query(
            `
            SELECT
                t.id,
                t.titulo,
                t.descripcion,
                c.nombre AS categoria,
                e.nombre AS estado,
                p.nombre AS prioridad,
                t.fecha_creacion
            FROM tickets t

            INNER JOIN categorias c
                ON c.id = t.categoria_id

            INNER JOIN estados e
                ON e.id = t.estado_id

            INNER JOIN prioridades p
                ON p.id = t.prioridad_id

            WHERE t.tecnico_id = $1

            ORDER BY t.fecha_creacion DESC
            `,
            [tecnicoId]
        );

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error obteniendo tickets del técnico"
        });

    }
};