window.BENCHMARK_DATA = {
  "lastUpdate": 1790019640407,
  "repoUrl": "https://github.com/ldos-project/asterinas",
  "entries": {
    "ramfs_benchmarks_vacuum": [
      {
        "commit": {
          "author": {
            "name": "gvipat",
            "username": "gvipat",
            "email": "gaurav.vipat@gmail.com"
          },
          "committer": {
            "name": "gvipat",
            "username": "gvipat",
            "email": "gaurav.vipat@gmail.com"
          },
          "id": "f770cea880ee31088966b1de784b499aecb89fa1",
          "message": "Fix act dependency fetch",
          "timestamp": "2026-09-19T16:44:21Z",
          "url": "https://github.com/ldos-project/asterinas/commit/f770cea880ee31088966b1de784b499aecb89fa1"
        },
        "date": 1790019638076,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The 'VACUUM' result of sqlite speedtest",
        "description": "sqlite-speed-test: repacking database file into a minimal amount of disk space",
        "display": false,
        "benches": [
          {
            "name": "The speed of VACUUM on Linux (Ramfs)",
            "value": "0.823",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of VACUUM on Asterinas (Ramfs)",
            "value": "0.790",
            "unit": "second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "ramfs_benchmarks_updates_individual": [
      {
        "commit": {
          "author": {
            "name": "gvipat",
            "username": "gvipat",
            "email": "gaurav.vipat@gmail.com"
          },
          "committer": {
            "name": "gvipat",
            "username": "gvipat",
            "email": "gaurav.vipat@gmail.com"
          },
          "id": "f770cea880ee31088966b1de784b499aecb89fa1",
          "message": "Fix act dependency fetch",
          "timestamp": "2026-09-19T16:44:21Z",
          "url": "https://github.com/ldos-project/asterinas/commit/f770cea880ee31088966b1de784b499aecb89fa1"
        },
        "date": 1790019638637,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The updates-individual result of sqlite speedtest",
        "description": "sqlite-speed-test: 50000 UPDATES of individual rows",
        "display": false,
        "benches": [
          {
            "name": "The speed of updates-individual on Linux (Ramfs)",
            "value": "1.254",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-individual on Asterinas (Ramfs)",
            "value": "1.346",
            "unit": "second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "ramfs_benchmarks_updates_big_one": [
      {
        "commit": {
          "author": {
            "name": "gvipat",
            "username": "gvipat",
            "email": "gaurav.vipat@gmail.com"
          },
          "committer": {
            "name": "gvipat",
            "username": "gvipat",
            "email": "gaurav.vipat@gmail.com"
          },
          "id": "f770cea880ee31088966b1de784b499aecb89fa1",
          "message": "Fix act dependency fetch",
          "timestamp": "2026-09-19T16:44:21Z",
          "url": "https://github.com/ldos-project/asterinas/commit/f770cea880ee31088966b1de784b499aecb89fa1"
        },
        "date": 1790019639048,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The updates-big-one result of sqlite speedtest",
        "description": "sqlite-speed-test: One big UPDATE of the whole 50000-row table",
        "display": false,
        "benches": [
          {
            "name": "The speed of updates-big-one on Linux (Ramfs)",
            "value": "0.085",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-big-one on Asterinas (Ramfs)",
            "value": "0.085",
            "unit": "second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "ramfs_benchmarks_updates_between": [
      {
        "commit": {
          "author": {
            "name": "gvipat",
            "username": "gvipat",
            "email": "gaurav.vipat@gmail.com"
          },
          "committer": {
            "name": "gvipat",
            "username": "gvipat",
            "email": "gaurav.vipat@gmail.com"
          },
          "id": "f770cea880ee31088966b1de784b499aecb89fa1",
          "message": "Fix act dependency fetch",
          "timestamp": "2026-09-19T16:44:21Z",
          "url": "https://github.com/ldos-project/asterinas/commit/f770cea880ee31088966b1de784b499aecb89fa1"
        },
        "date": 1790019639383,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The updates-between result of sqlite speedtest",
        "description": "sqlite-speed-test: 10000 UPDATES, numeric BETWEEN, indexed",
        "display": false,
        "benches": [
          {
            "name": "The speed of updates-between on Linux (Ramfs)",
            "value": "1.859",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-between on Asterinas (Ramfs)",
            "value": "1.907",
            "unit": "second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "ramfs_benchmarks_total": [
      {
        "commit": {
          "author": {
            "name": "gvipat",
            "username": "gvipat",
            "email": "gaurav.vipat@gmail.com"
          },
          "committer": {
            "name": "gvipat",
            "username": "gvipat",
            "email": "gaurav.vipat@gmail.com"
          },
          "id": "f770cea880ee31088966b1de784b499aecb89fa1",
          "message": "Fix act dependency fetch",
          "timestamp": "2026-09-19T16:44:21Z",
          "url": "https://github.com/ldos-project/asterinas/commit/f770cea880ee31088966b1de784b499aecb89fa1"
        },
        "date": 1790019639818,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The total result of sqlite speedtest",
        "description": "sqlite-speed-test: total",
        "display": false,
        "benches": [
          {
            "name": "Total speed on Linux (Ramfs)",
            "value": "55.600",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "Total speed on Asterinas (Ramfs)",
            "value": "57.334",
            "unit": "second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "ramfs_benchmarks_selects_text_pk": [
      {
        "commit": {
          "author": {
            "name": "gvipat",
            "username": "gvipat",
            "email": "gaurav.vipat@gmail.com"
          },
          "committer": {
            "name": "gvipat",
            "username": "gvipat",
            "email": "gaurav.vipat@gmail.com"
          },
          "id": "f770cea880ee31088966b1de784b499aecb89fa1",
          "message": "Fix act dependency fetch",
          "timestamp": "2026-09-19T16:44:21Z",
          "url": "https://github.com/ldos-project/asterinas/commit/f770cea880ee31088966b1de784b499aecb89fa1"
        },
        "date": 1790019640405,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The selects-text-pk result of sqlite speedtest",
        "description": "sqlite-speed-test: 70000 SELECTS on a TEXT PK",
        "display": false,
        "benches": [
          {
            "name": "The speed of selects-text-pk on Linux (Ramfs)",
            "value": "3.151",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of selects-text-pk on Asterinas (Ramfs)",
            "value": "3.105",
            "unit": "second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ]
  }
}