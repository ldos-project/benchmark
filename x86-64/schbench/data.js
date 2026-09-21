window.BENCHMARK_DATA = {
  "lastUpdate": 1790019647834,
  "repoUrl": "https://github.com/ldos-project/asterinas",
  "entries": {
    "smp8_p99_wakeup_latency": [
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
        "date": 1790019647831,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "27",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "78",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ]
  }
}