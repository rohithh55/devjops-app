/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pssv84by1dt8heb");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "pssv84by1dt8heb",
    "created": "2026-05-28 17:16:08.808Z",
    "updated": "2026-05-30 06:31:36.867Z",
    "name": "AWS_jobbb",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "svqrqug7",
        "name": "company",
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
        "name": "location",
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
        "name": "description",
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
      },
      {
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
      },
      {
        "system": false,
        "id": "frrfjcqv",
        "name": "fieldCLOUD_ENGINNR",
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
    "indexes": [
      "CREATE INDEX `idx_DMCe3rf` ON `AWS_jobbb` (\n  `company`,\n  `location`,\n  `description`,\n  `httpsats_rippling_comconceptplusjobsa88e1dfd_9ae4_4fa7_9080_48b1e1500e71src_LinkedIn`\n)",
      "CREATE INDEX `idx_a8RzaC0` ON `AWS_jobbb` (\n  `description`,\n  `location`,\n  `company`,\n  `httpsats_rippling_comconceptplusjobsa88e1dfd_9ae4dIn`\n)",
      "CREATE INDEX `idx_mTloXaP` ON `AWS_jobbb` (\n  `fieldCLOUD_ENGINNR`,\n  `company`,\n  `location`,\n  `description`\n)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
