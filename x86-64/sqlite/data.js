window.BENCHMARK_DATA = {
  "lastUpdate": 1790019638079,
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
    ]
  }
}