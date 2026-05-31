/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pssv84by1dt8heb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tyrcwnen",
    "name": "httpswww_linkedin_compostsambilio_hiring_internship_ai_activity_7466009807322279950_12z0utm_source_shareandutm_medium_member_desktopandrcm_ACoAAFcBKSgBUj9ZtlFqr6OAUwDayXGKmbIL7DI",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pssv84by1dt8heb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tyrcwnen",
    "name": "Location",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
