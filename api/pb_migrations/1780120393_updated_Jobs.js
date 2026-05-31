/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pssv84by1dt8heb")

  collection.indexes = [
    "CREATE INDEX `idx_DMCe3rf` ON `Jobs` (\n  `company`,\n  `location`,\n  `description`,\n  `httpsats_rippling_comconceptplusjobsa88e1dfd_9ae4_4fa7_9080_48b1e1500e71src_LinkedIn`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pssv84by1dt8heb")

  collection.indexes = []

  return dao.saveCollection(collection)
})
