/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pssv84by1dt8heb")

  collection.name = "AWS_jobbb"
  collection.indexes = [
    "CREATE INDEX `idx_DMCe3rf` ON `AWS_jobbb` (\n  `company`,\n  `location`,\n  `description`,\n  `httpsats_rippling_comconceptplusjobsa88e1dfd_9ae4_4fa7_9080_48b1e1500e71src_LinkedIn`\n)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cooraclq",
    "name": "httpsats_rippling_comconceptplusjobsa88e1dfd_9ae4_4fa7_9080_48b1e1500e71src_LinkedIn",
    "type": "url",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cde1ddlb",
    "name": "httpsats_rippling_comconceptplusjobsa88e1dfd_9ae4dIn",
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

  collection.name = "Jobs"
  collection.indexes = [
    "CREATE INDEX `idx_DMCe3rf` ON `Jobs` (\n  `company`,\n  `location`,\n  `description`,\n  `httpsats_rippling_comconceptplusjobsa88e1dfd_9ae4_4fa7_9080_48b1e1500e71src_LinkedIn`\n)"
  ]

  // remove
  collection.schema.removeField("cooraclq")

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
})
