const path = require('path');
const fs = require('fs');
const SitemapGenerator = require('sitemap-generator-custom-volodzya');
const InvalidDataException = require('sitemap-generator-custom-volodzya/src/exceptions/InvalidDataException');
const FileAccessException = require('sitemap-generator-custom-volodzya/src/exceptions/FileAccessException');

// Исключенные директории
const excludedDirs = ['node_modules', '.git'];

// Функция для рекурсивного сканирования директорий
function getPages(dir, baseURL = '') {
    let pages = [];
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            if (!excludedDirs.includes(file)) {
                console.log(`Scanning directory: ${fullPath}`);
                pages = pages.concat(getPages(fullPath, path.join(baseURL, file)));
            }
        } else if (file.endsWith('.html')) {
            console.log(`Found HTML file: ${fullPath}`);
            pages.push({
                loc: path.join(baseURL, file).replace(/\\/g, '/'),
                lastmod: stat.mtime.toISOString().split('T')[0],
                changefreq: 'daily',
                priority: '0.5'
            });
        }
    });

    return pages;
}

// Путь к корневой директории вашего сайта
const basePath = path.join(__dirname, '..');

// Получение массива страниц
const pages = getPages(basePath);

console.log(`Total pages found: ${pages.length}`);
console.log(pages);

const fileType = 'xml'; // можно использовать 'csv' или 'json'
const filePath = path.join(__dirname, '..', 'sitemap.xml'); // путь к файлу, где будет сохранена карта сайта

try {
    new SitemapGenerator(pages, fileType, filePath);
    console.log("Sitemap generated successfully.");
} catch (error) {
    if (error instanceof InvalidDataException || error instanceof FileAccessException) {
        console.error("Error:", error.message);
    } else {
        console.error("An unexpected error occurred:", error.message);
    }
}