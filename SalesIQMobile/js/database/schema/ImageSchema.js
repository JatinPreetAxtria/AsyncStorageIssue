import * as db from "../Constants";

export class ImageSchema {
}

ImageSchema.schema = {
    name: db.TABLE_IMAGES,
    primaryKey: db.ID,
    properties: {
        [db.ID]: 'string',
        // [db.PDD_ID]: 'int',
        [db.SALES_ID]: 'int',
        [db.SALES_TYPE]: 'int', // doc_type... 1,2,3
        [db.SALES_PATH]: 'string',
        [db.UPLOAD_STATUS]: 'int',
        [db.SALES_TAG]: 'string',
        [db.SALES_INDEX]: 'int', // imageName
        [db.SUBMITED]: 'int',
        [db.IS_BEING_UPLOAD]: 'int'
        // [db.REF_CODE]: 'string',
        // [db.IMAGE_ID]: 'string',
        // [db.EXTRA_FIELD2]: 'string?',
        // [db.EXTRA_FIELD3]: 'string?',
        // [db.EXTRA_FIELD4]: 'string?',
        // [db.VTB]: 'string',
    }
};

