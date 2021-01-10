export const DBConfig = {
    name: 'MyDB',
    version: 1,
    objectStoresMeta: [
      {
        store: 'jawlat',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
        //   { name: 'jawlahID', keypath: 'jawlahID', options: { unique: true } },
          { name: 'winType', keypath: 'winType', options: { unique: false } },
          { name: 'winnerTeam', keypath: 'winnerTeam', options: { unique: false } },
          { name: 'losserTeam', keypath: 'losserTeam', options: { unique: false } },
          { name: 'winnerValue', keypath: 'winnerValue', options: { unique: false } },
          { name: 'losserValue', keypath: 'losserValue', options: { unique: false } },
          { name: 'nazilCount', keypath: 'nazilCount', options: { unique: false } },
          { name: 'nazilTotal', keypath: 'nazilTotal', options: { unique: false } },
          { name: 'isTasjilah', keypath: 'isTasjilah', options: { unique: false } }

        ]
      }
    ]
  };
