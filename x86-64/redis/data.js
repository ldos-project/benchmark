window.BENCHMARK_DATA = {
  "lastUpdate": 1790221551366,
  "repoUrl": "https://github.com/ldos-project/asterinas",
  "entries": {
    "ping_inline_100k_conc20_rps": [
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
        "date": 1790019786379,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100401.61",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "131578.95",
            "unit": "request per second",
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
        "date": 1790026575200,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100603.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "130718.95",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
        "date": 1790038685139,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100806.45",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "137362.64",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260921-222645"
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
        "date": 1790051932784,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "101626.02",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "130890.05",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260922-013315"
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
        "date": 1790109659905,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "101832.99",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "131578.95",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260922-174620"
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
        "date": 1790122125013,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "101010.10",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "131578.95",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260922-212307"
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
          "id": "ba3b1a83733df87e4c86fe408ac95478a384a002",
          "message": "Update benchmark branch",
          "timestamp": "2026-09-23T00:23:26Z",
          "url": "https://github.com/ldos-project/asterinas/commit/ba3b1a83733df87e4c86fe408ac95478a384a002"
        },
        "date": 1790130701660,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100200.40",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "133511.34",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260923-000921"
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
          "id": "ba3b1a83733df87e4c86fe408ac95478a384a002",
          "message": "Update benchmark branch",
          "timestamp": "2026-09-23T00:23:26Z",
          "url": "https://github.com/ldos-project/asterinas/commit/ba3b1a83733df87e4c86fe408ac95478a384a002"
        },
        "date": 1790151027590,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "99700.90",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "132978.73",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260923-050602"
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
          "id": "7fc6e655d8b631e457a59df1a8e95320c726a203",
          "message": "Update cron comment",
          "timestamp": "2026-09-24T00:44:09Z",
          "url": "https://github.com/ldos-project/asterinas/commit/7fc6e655d8b631e457a59df1a8e95320c726a203"
        },
        "date": 1790221551362,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100502.52",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "132100.39",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260924-011720"
      }
    ],
    "ping_mbulk_100k_conc20_rps": [
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
        "date": 1790019785867,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "103950.10",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "134408.59",
            "unit": "request per second",
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
        "date": 1790026574730,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "103412.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "134770.89",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
        "date": 1790038684711,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "103734.44",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "134952.77",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260921-222645"
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
        "date": 1790051932355,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "103305.79",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "135135.14",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260922-013315"
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
        "date": 1790109659554,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "102354.15",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "141643.06",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260922-174620"
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
        "date": 1790122124536,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "101832.99",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "140646.97",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260922-212307"
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
          "id": "ba3b1a83733df87e4c86fe408ac95478a384a002",
          "message": "Update benchmark branch",
          "timestamp": "2026-09-23T00:23:26Z",
          "url": "https://github.com/ldos-project/asterinas/commit/ba3b1a83733df87e4c86fe408ac95478a384a002"
        },
        "date": 1790130701245,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "102986.61",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "133333.33",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260923-000921"
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
          "id": "ba3b1a83733df87e4c86fe408ac95478a384a002",
          "message": "Update benchmark branch",
          "timestamp": "2026-09-23T00:23:26Z",
          "url": "https://github.com/ldos-project/asterinas/commit/ba3b1a83733df87e4c86fe408ac95478a384a002"
        },
        "date": 1790151027152,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "104166.67",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "134408.59",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260923-050602"
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
          "id": "7fc6e655d8b631e457a59df1a8e95320c726a203",
          "message": "Update cron comment",
          "timestamp": "2026-09-24T00:44:09Z",
          "url": "https://github.com/ldos-project/asterinas/commit/7fc6e655d8b631e457a59df1a8e95320c726a203"
        },
        "date": 1790221550907,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "100908.17",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "134228.19",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260924-011720"
      }
    ],
    "get_100k_conc20_rps": [
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
        "date": 1790019786762,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "101936.80",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "130208.34",
            "unit": "request per second",
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
        "date": 1790026575621,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "100704.94",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "133868.81",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
        "date": 1790038685604,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "101832.99",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "138696.25",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260921-222645"
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
        "date": 1790051933233,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "100704.94",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "130718.95",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260922-013315"
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
        "date": 1790109660341,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "101936.80",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "130548.30",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260922-174620"
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
        "date": 1790122125478,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "102040.81",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "131061.59",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260922-212307"
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
          "id": "ba3b1a83733df87e4c86fe408ac95478a384a002",
          "message": "Update benchmark branch",
          "timestamp": "2026-09-23T00:23:26Z",
          "url": "https://github.com/ldos-project/asterinas/commit/ba3b1a83733df87e4c86fe408ac95478a384a002"
        },
        "date": 1790130702092,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "101214.58",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "131752.31",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260923-000921"
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
          "id": "ba3b1a83733df87e4c86fe408ac95478a384a002",
          "message": "Update benchmark branch",
          "timestamp": "2026-09-23T00:23:26Z",
          "url": "https://github.com/ldos-project/asterinas/commit/ba3b1a83733df87e4c86fe408ac95478a384a002"
        },
        "date": 1790151028021,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "103199.18",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "132802.12",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260923-050602"
      }
    ],
    "set_100k_conc20_rps": [
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
        "date": 1790026574365,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "98328.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "125786.16",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
        "date": 1790038684270,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "98039.22",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "124843.95",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260921-222645"
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
        "date": 1790051931924,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "98135.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "125786.16",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260922-013315"
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
        "date": 1790109659139,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96525.09",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "126742.72",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260922-174620"
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
        "date": 1790122124080,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "98716.68",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "124069.48",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260922-212307"
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
          "id": "ba3b1a83733df87e4c86fe408ac95478a384a002",
          "message": "Update benchmark branch",
          "timestamp": "2026-09-23T00:23:26Z",
          "url": "https://github.com/ldos-project/asterinas/commit/ba3b1a83733df87e4c86fe408ac95478a384a002"
        },
        "date": 1790130700789,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97087.38",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "126103.41",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260923-000921"
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
          "id": "ba3b1a83733df87e4c86fe408ac95478a384a002",
          "message": "Update benchmark branch",
          "timestamp": "2026-09-23T00:23:26Z",
          "url": "https://github.com/ldos-project/asterinas/commit/ba3b1a83733df87e4c86fe408ac95478a384a002"
        },
        "date": 1790151026738,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97087.38",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "126103.41",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260923-050602"
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
          "id": "7fc6e655d8b631e457a59df1a8e95320c726a203",
          "message": "Update cron comment",
          "timestamp": "2026-09-24T00:44:09Z",
          "url": "https://github.com/ldos-project/asterinas/commit/7fc6e655d8b631e457a59df1a8e95320c726a203"
        },
        "date": 1790221550495,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "98814.23",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "126582.27",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260924-011720"
      }
    ],
    "ycsb": [
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
        "date": 1790019650484,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8789.69957081545",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3497.865072587532",
            "unit": "operations per second",
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
        "date": 1790026573966,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8904.347826086956",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3480.0339847068817",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
        "date": 1790038683869,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8904.347826086956",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3424.7491638795987",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260921-222645"
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
        "date": 1790051931566,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8962.800875273522",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3485.9574468085107",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260922-013315"
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
        "date": 1790109658695,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8808.602150537634",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3500.8547008547007",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260922-174620"
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
        "date": 1790122123636,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8714.893617021276",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3537.13298791019",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260922-212307"
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
          "id": "ba3b1a83733df87e4c86fe408ac95478a384a002",
          "message": "Update benchmark branch",
          "timestamp": "2026-09-23T00:23:26Z",
          "url": "https://github.com/ldos-project/asterinas/commit/ba3b1a83733df87e4c86fe408ac95478a384a002"
        },
        "date": 1790130700340,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8733.475479744136",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3376.751854905194",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260923-000921"
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
          "id": "ba3b1a83733df87e4c86fe408ac95478a384a002",
          "message": "Update benchmark branch",
          "timestamp": "2026-09-23T00:23:26Z",
          "url": "https://github.com/ldos-project/asterinas/commit/ba3b1a83733df87e4c86fe408ac95478a384a002"
        },
        "date": 1790151026250,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8982.456140350878",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3365.653245686113",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260923-050602"
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
          "id": "7fc6e655d8b631e457a59df1a8e95320c726a203",
          "message": "Update cron comment",
          "timestamp": "2026-09-24T00:44:09Z",
          "url": "https://github.com/ldos-project/asterinas/commit/7fc6e655d8b631e457a59df1a8e95320c726a203"
        },
        "date": 1790221550069,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8224.899598393575",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3424.7491638795987",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260924-011720"
      }
    ]
  }
}