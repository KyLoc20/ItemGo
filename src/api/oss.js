import config from "../config";
var OSS = require("ali-oss");


async function putUploadFiles(files) {
    console.log('putUploadFiles', files);
    let client = new OSS(config.oss);
    for (let file of files) {
        //remember to set cross domain
        client.put(file.name, file).then(function(res) {
            /* e.g. result = {
                name: "Uploads/file/20171125/1511601396119.png",
                res: {status: 200, statusCode: 200, headers: {…}, size: 0, aborted: false, …},
                url: "http://bucket.oss-cn-shenzhen.aliyuncs.com/Uploads/file/20171125/1511601396119.png"
            } */
            console.log(res);
        }).catch(function(err) {
            console.log(err);
        })
    }
}
export default {
    putUploadFiles
}