/**
 * Renombra el fichero "bird.jpg" a "pajaro.jpg"
 */

const fs = require("fs");

fs.renameSync("bird.jpg", "pajaro.jpg");
