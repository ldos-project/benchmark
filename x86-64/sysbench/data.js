window.BENCHMARK_DATA = {
  "lastUpdate": 1790026562531,
  "repoUrl": "https://github.com/ldos-project/asterinas",
  "entries": {
    "cpu_lat": [
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
        "date": 1790019637660,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "7.16",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "7.15",
            "unit": "ms",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "thread_lat": [
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
        "date": 1790019637207,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "9.10",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "3.23",
            "unit": "ms",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      },
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
          "id": "aeed5593251eb91a77540dc96a9992bc16698723",
          "message": "Add clean workspace function and tarball delete.",
          "timestamp": "2026-09-21T21:34:27Z",
          "url": "https://github.com/ldos-project/asterinas/commit/aeed5593251eb91a77540dc96a9992bc16698723"
        },
        "date": 1790026562522,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "9.38",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "3.24",
            "unit": "ms",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
      }
    ]
  }
}