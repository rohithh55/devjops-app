/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pssv84by1dt8heb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cde1ddlb",
    "name": "httpsats_rippling_comconceptplusjobsa88e1dfd_9ae4_4fa7_9080_48b1e1500e71src_LinkedIn",
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
    "id": "cde1ddlb",
    "name": "joburl",
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
