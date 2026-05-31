/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pssv84by1dt8heb")

  collection.indexes = [
    "CREATE INDEX `idx_DMCe3rf` ON `AWS_jobbb` (\n  `company`,\n  `location`,\n  `description`,\n  `httpsats_rippling_comconceptplusjobsa88e1dfd_9ae4_4fa7_9080_48b1e1500e71src_LinkedIn`\n)",
    "CREATE INDEX `idx_a8RzaC0` ON `AWS_jobbb` (\n  `description`,\n  `location`,\n  `company`,\n  `httpsats_rippling_comconceptplusjobsa88e1dfd_9ae4dIn`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pssv84by1dt8heb")

  collection.indexes = [
    "CREATE INDEX `idx_DMCe3rf` ON `AWS_jobbb` (\n  `company`,\n  `location`,\n  `description`,\n  `httpsats_rippling_comconceptplusjobsa88e1dfd_9ae4_4fa7_9080_48b1e1500e71src_LinkedIn`\n)"
  ]

  return dao.saveCollection(collection)
})
