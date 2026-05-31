/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("977yvtoe52eueem")

  collection.name = "devops"
  collection.indexes = [
    "CREATE INDEX `idx_apFoT0a` ON `devops` (\n  `title`,\n  `company`,\n  `location`,\n  `description`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("977yvtoe52eueem")

  collection.name = "devops_duplicate"
  collection.indexes = [
    "CREATE INDEX `idx_apFoT0a` ON `devops_duplicate` (\n  `title`,\n  `company`,\n  `location`,\n  `description`\n)"
  ]

  return dao.saveCollection(collection)
})
