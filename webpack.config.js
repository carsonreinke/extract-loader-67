const pathToMainJs = require.resolve("./app/main.js");
const pathToIndexHtml = require.resolve("./app/index.html");

module.exports = {
    entry: [
        pathToMainJs,
        pathToIndexHtml
    ],
    module: {
        rules: [
            {
                test: pathToIndexHtml,
                use: [
                    "file-loader",
                    "extract-loader",
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ["img:src", "link:href"]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "file-loader",
                    "extract-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.jpg$/,
                use: "file-loader"
            }
        ]
    }
};