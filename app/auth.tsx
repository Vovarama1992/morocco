import { sql } from '@vercel/postgres';

{/*export async function signIn(credentials: string, formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    try {
        // Выполняем запрос к базе данных для поиска строки с совпадающим email и паролем
        const result = await sql`
          SELECT COUNT(*) AS count
          FROM authusers
          WHERE email = ${email} AND password = ${password};
        `;
    
        // Извлекаем количество найденных строк из результата
        const count = result.rows[0].count;
        console.log("count: " + count);
    
        // Если количество найденных строк больше нуля, возвращаем true, иначе false
        return count > 0;
        
      } catch (error) {
        // Если произошла ошибка при выполнении запроса, выводим сообщение об ошибке и выбрасываем исключение
        console.error('Ошибка при проверке учетных данных:', error);
        throw error;
      }
}*/}