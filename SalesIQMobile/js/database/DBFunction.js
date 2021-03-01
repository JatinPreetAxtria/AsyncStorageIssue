import {
    ImageSchema,
    ImageProcessingSchema
} from "./schema";
import * as DBConstants from "./Constants";

// import * as Utility from "../utils/Utility";
import Realm from 'realm';
import { Strings } from "../value/index";

// dateFormat = require('../utils/DateFormat');

const SalesRealm = new Realm({
    schema: [ImageSchema, ImageProcessingSchema],
    path: 'sales.realm',
    schemaVersion: DBConstants.TABLE_IMAGES_SCHEMA_VERSION
});

export function dropImages() {
    images = SalesRealm.objects(DBConstants.TABLE_IMAGES);
    if (images && images.length > 0)
    SalesRealm.write(() => {
        SalesRealm.delete(images);
        });
}



export function dropDb() {
    dropImages();

}


export function insertProcessingStatus(Sales_id, name,salesAdd ,callStatus, callback) {
    console.log('uploadCount ******** ', salesAdd,Sales_id)
   
    
    SalesRealm.write(() => {
        try {
            SalesRealm.create(DBConstants.TABLE_IMAGES_PROCESSING_STATUS, {
                [DBConstants.PROCESSING_SALES_ID]: Sales_id,
                [DBConstants.SALESADD]: salesAdd,
                [DBConstants.NAME]: name,
                [DBConstants.PROCESSING_SALES_ID_STATUS]: callStatus,
            });
        }
        catch (error) {
            console.log("==================> insert error" + error);
            callback(Strings.IMAGE_PROCESSING_SAVE_FAILURE)
        }
        console.log("DBConstants.PROCESSING_Sales_ID", Sales_id);
        console.log("DBConstants.PROCESSING_Sales_ID_STATUS", callStatus);
        console.log("DBConstants.PROCESSING_Sales_ID", name);
        console.log("DBConstants.UPLOAD_COUNT", salesAdd);
    });
    callback(Strings.IMAGE_PROCESSING_SAVE_SUCCESS)
}

export function getProcessingStatus() {
    try {
        let object = SalesRealm.objects(DBConstants.TABLE_IMAGES_PROCESSING_STATUS);
        if (object.length > 0) { console.log("==================> getimage data " + object);

            return object;
            
        } else {
            return 0;
        }
    } catch (error) {
        console.log("==================> getimage data error " + error);
    }
}
export async function dropProcessingStatus(id) {
    let objectToDelete = SalesRealm.objects(DBConstants.TABLE_IMAGES_PROCESSING_STATUS).filtered(DBConstants.PROCESSING_SALES_ID + " = '" + id + "'");

    try {
        if (objectToDelete) {
            if (objectToDelete.isValid()) {
                await SalesRealm.write(() => {
                    SalesRealm.delete(objectToDelete);
                });
            }
        }
    } catch (error) {
        console.log("==================> drop image" + error);
    }

}
export async function updateProcessingStatus(id, max_count, updatedCount) {
    let updateCount = 0;

    let objects = SalesRealm.objects(DBConstants.TABLE_IMAGES_PROCESSING_STATUS);
    objects = objects.filtered(DBConstants.PROCESSING_SALES_ID + ' = ' + '"' + id + '"');
    if (objects.length > 0) {
        var object = objects[0];
        var updateCountNext;
        if (updatedCount == -1) {
            updateCountNext = object[DBConstants.UPLOAD_COUNT] + 1
        } else {
            updateCountNext = updatedCount
        }
        console.log("==================> updateCountNext" + updateCountNext);
        SalesRealm.write(() => {
            try {
                object[DBConstants.PROCESSING_SALES_ID_STATUS] = 1;
                if (max_count == -1) {

                } else {
                    object[DBConstants.MAX_COUNT] = max_count;

                }
                object[DBConstants.UPLOAD_COUNT] = updateCountNext;
                updateCount++;

            } catch (error) {
                console.log("error WHILE UPDATING", JSON.stringify(error));

            }
            console.log("object[DBConstants.UPLOAD_COUNT]", updateCountNext);
        });
    }

    return updateCount;
}
export function generateSimpleList(object) {
     console.log("generateSimpleListColor", object);
    let resp = [];
    for (let o in object) {
        // console.log("==================> getimage data generateSimpleList " + o);
        if (object.hasOwnProperty(o))
            resp.push(object[o]);
    }
    
    return resp;
}

export function insertImageData(imageData, Sales_id, image_type, callback) {
    // alert('images:- ' + JSON.stringify(imageData) +
    //     'pdd_id:- ' + JSON.stringify(pdd_id) +
    //     'image_type:- ' + JSON.stringify(image_type))

    // return
    let allImages = SalesRealm.objects(DBConstants.TABLE_IMAGES);
    const auti_inc_Id = allImages.length > 0 ? allImages[allImages.length - 1][DBConstants.AUTO_INC_ID] + 1 : 1;
    console.log("auti_inc_Id  --->> ", auti_inc_Id);
    
    let insertCount = 0, notInserted = [];
    for (let i = 0; i < imageData.length; i++) {
        SalesRealm.write(() => {
            try {
                SalesRealm.create(DBConstants.TABLE_IMAGES, {
                    [DBConstants.ID]: String(new Date().getTime()) + i,
                    [DBConstants.SALES_ID]: Sales_id,
                    [DBConstants.SALES_TYPE]: image_type,    // doc_type... 1,2,3
                    [DBConstants.IMAGE_PATH]: imageData[i].path,
                    [DBConstants.UPLOAD_STATUS]: 0,
                    [DBConstants.SALES_TAG]: 'image',
                    [DBConstants.SALES_INDEX]: i,
                    [DBConstants.SUBMITED]: 0,
                    [DBConstants.IS_BEING_UPLOAD]: 0,

                });

                insertCount++;
                console.log("==================> Check After Save in DB ", insertCount);
                console.log("DBConstants.ID", String(new Date().getTime()) + i);
                console.log("DBConstants.SALES_ID", Sales_id);
                console.log("DBConstants.IMAGE_TYPE", image_type);
                console.log("DBConstants.IMAGE_PATH", imageData[i].path);
                console.log("DBConstants.IMAGE_INDEX", imageData[i].IMAGE_INDEX);



            }
            catch (error) {
                console.log("==================> insert error" + error);
                callback(Strings.IMAGE_SAVE_FAILURE)

            }
            // Utility.log("insertedCount" + insertCount);
        });
    }
    if (insertCount == imageData.length)
        callback(Strings.IMAGE_SAVE_SUCCESS)
}


export async function dropImageData(id) {
    let objectToDelete = SalesRealm.objects(DBConstants.TABLE_IMAGES).filtered(DBConstants.ID + " = '" + id + "'");
    try {
        if (objectToDelete) {
            if (objectToDelete.isValid()) {
                await SalesRealm.write(() => {
                    SalesRealm.delete(objectToDelete);
                });
            }
        }
    } catch (error) {
        console.log("==================> drop image" + error);
    }

}


export function getImageData() {
    try {
        let object = SalesRealm.objects(DBConstants.TABLE_IMAGES);
        if (object.length > 0) {
            return object;
        } else {
            return [];
        }
    } catch (error) {
        console.log("==================> getimage data " + error);
    }
}


export async function deleteImageFile(id) {
    let deleteCount = 0;
    SalesRealm.write(() => {
        try {
            let objects = SalesRealm.objects(DBConstants.TABLE_IMAGES);
            objects = objects.filtered(DBConstants.ID + ' = ' + '"' + id + '"');
            if (objects.length > 0) {
                let object = objects[0];
                SalesRealm.delete(object);
                deleteCount++;
            }
           console.log("object after delete in realm == " + JSON.stringify(objects)  + '"' + id + '"')

        } catch (error) {
            console.log('Error in Delete', error)
        }
    });
    return deleteCount;
}

export async function updateUploadStatus(id) {
    let updateCount = 0;

    SalesRealm.write(() => {
        try {
            let objects = SalesRealm.objects(DBConstants.TABLE_IMAGES);
            objects = objects.filtered(DBConstants.ID + ' = ' + '"' + id + '"');
            if (objects.length > 0) {
                let object = objects[0];
                object[DBConstants.UPLOAD_STATUS] = 1;
                updateCount++;
            }
        } catch (error) {

        }
    });
    return updateCount;
}
export async function updateImageSubmitStatus(id) {
    let updateCount = 0;

    SalesRealm.write(() => {
        try {
            let objects = SalesRealm.objects(DBConstants.TABLE_IMAGES);
            objects = objects.filtered(DBConstants.ID + ' = ' + '"' + id + '"');
            if (objects.length > 0) {
                let object = objects[0];
                object[DBConstants.SUBMITED] = 1;
                console.log("updateImageSubmitStatus", updateImageSubmitStatus)
                updateCount++;
                console.log("updateCount", updateCount)

            }
        } catch (error) {

        }
    });
    return updateCount;
}

export async function changeUploadingStatus(id, status) {
    let updateCount = 0;
    SalesRealm.write(() => {
        try {
            let objects = SalesRealm.objects(DBConstants.TABLE_IMAGES);
            objects = objects.filtered(DBConstants.ID + ' = ' + '"' + id + '"');
            if (objects.length > 0) {
                let object = objects[0];
                object[DBConstants.IS_BEING_UPLOAD] = status;
                updateCount++;
            }
        } catch (error) {

        }
    });
    return updateCount;
}

export async function checkUploadStatus(id) {
    let status = 0;

    let objects = SalesRealm.objects(DBConstants.TABLE_IMAGES);
    objects = objects.filtered(DBConstants.ID + ' = ' + '"' + id + '"');


    if (objects.length > 0) {
        let object = objects[0];
        status = object[DBConstants.UPLOAD_STATUS]
    }
    return status;
}


export function getImageFiles(filterQuery, sort) {

    let objArray = []
    let objects = SalesRealm.objects(DBConstants.TABLE_IMAGES);

    if (filterQuery)
        objects = objects.filtered(filterQuery);
    if (sort)
        objects = objects.sorted(sort);

    if (objects.length > 0) {
        objArray = Object.keys(objects).map(function (i) {
            return objects[i];
        });
    }
    return objArray;
}

