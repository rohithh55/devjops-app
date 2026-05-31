/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "pssv84by1dt8heb",
    "created": "2026-05-28 17:16:08.808Z",
    "updated": "2026-05-28 17:16:08.808Z",
    "name": "Jobs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "svqrqug7",
        "name": "TITLE",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "eflj80j3",
        "name": "Company",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pssv84by1dt8heb");

  return dao.deleteCollection(collection);
})
