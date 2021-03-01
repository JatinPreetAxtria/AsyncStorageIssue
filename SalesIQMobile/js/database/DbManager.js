import * as DBFunctions from "./DBFunction";


const Ops = {
    insertImageData: DBFunctions.insertImageData,
    getImageData:DBFunctions.getImageData,
    dropImageData:DBFunctions.dropImageData,
    dropImages:DBFunctions.dropImages,
};

export {
    Ops,

};


