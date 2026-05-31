/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1cjhrrvz1t786jy")

  collection.name = "devops"
  collection.indexes = [
    "CREATE INDEX `idx_NNJYe4a` ON `devops` (\n  `title`,\n  `company`,\n  `location`,\n  `description`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1cjhrrvz1t786jy")

  collection.name = "AWS_jobbb"
  collection.indexes = [
    "CREATE INDEX `idx_NNJYe4a` ON `AWS_jobbb` (\n  `title`,\n  `company`,\n  `location`,\n  `description`\n)"
  ]

  return dao.saveCollection(collection)
})
