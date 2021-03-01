import * as db from "../Constants";

export class ImageProcessingSchema {

}
ImageProcessingSchema.schema = {
    name: db.TABLE_IMAGES_PROCESSING_STATUS,
    properties: {
        [db.PROCESSING_SALES_ID]: 'int',
        [db.SALESADD]: 'string',
        [db.NAME]: 'string',
        [db.PROCESSING_SALES_ID_STATUS]: 'string'
    }
};