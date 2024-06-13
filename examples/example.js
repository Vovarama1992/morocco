const path = require('path');
const SitemapGenerator = require('sitemap-generator-custom-volodzya');
const InvalidDataException = require('sitemap-generator-custom-volodzya/src/exceptions/InvalidDataException');
const FileAccessException = require('sitemap-generator-custom-volodzya/src/exceptions/FileAccessException');

const basePath = path.join(__dirname, '..'); 
const fileType = 'xml'; 
const filePath = path.join(__dirname, '..', 'sitemap.xml'); 

try {
    new SitemapGenerator(basePath, fileType, filePath);
    console.log("Sitemap generated successfully.");
} catch (error) {
    if (error instanceof InvalidDataException || error instanceof FileAccessException) {
        console.error("Error:", error.message);
    } else {
        console.error("An unexpected error occurred:", error.message);
    }
}