window.BENCHMARK_DATA = {
  "lastUpdate": 1793086899493,
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
        "date": 1790235963504,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "101317.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "135869.56",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260924-050002"
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
        "date": 1790320801301,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "99800.40",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "131406.05",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260925-050002"
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
        "date": 1790407906735,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "99900.09",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "134228.19",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260926-050002"
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
        "date": 1790493423453,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "98911.96",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "129870.13",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260927-050002"
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
        "date": 1790583090424,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "101214.58",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "131061.59",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260928-050002"
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
        "date": 1790667971155,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100300.91",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "130548.30",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260929-050002"
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
        "date": 1790755198001,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "97943.19",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "130208.34",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260930-050002"
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
        "date": 1790840032037,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "101522.84",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "136986.30",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261001-050002"
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
        "date": 1790924951206,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "99403.58",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "137551.58",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261002-050002"
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
        "date": 1791013258722,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "99206.34",
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
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261003-050002"
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
        "date": 1791098323280,
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
            "value": "130208.34",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261004-050002"
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
        "date": 1791185320774,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "99403.58",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "130039.02",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261005-050001"
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
        "date": 1791272119506,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100704.94",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "130378.09",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261006-050002"
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
        "date": 1791359895439,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "98911.96",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "130039.02",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261007-050002"
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
        "date": 1791444484672,
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
            "value": "135318.00",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261008-050002"
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
        "date": 1791531185256,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "98716.68",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "129533.68",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261009-050002"
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
        "date": 1791616989439,
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
            "value": "135318.00",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261010-050002"
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
        "date": 1791703571124,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "99206.34",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "134589.50",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261011-050002"
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
        "date": 1791790381034,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "101214.58",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "132450.33",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261012-050001"
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
        "date": 1791876026554,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "98814.23",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "130378.09",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261013-050002"
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
        "date": 1791963173599,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "99403.58",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "131061.59",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261014-050002"
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
          "id": "29ebdd325dcf2c8afb6b5cf9d0eccf091c003c36",
          "message": "Remove dead log message",
          "timestamp": "2026-10-15T00:08:26Z",
          "url": "https://github.com/ldos-project/asterinas/commit/29ebdd325dcf2c8afb6b5cf9d0eccf091c003c36"
        },
        "date": 1792049679984,
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
            "value": "130039.02",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261015-050002"
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
          "id": "53cc887a25bbba32e34ec2cd5e2564376e44e3d0",
          "message": "Fix typo",
          "timestamp": "2026-10-16T01:04:34Z",
          "url": "https://github.com/ldos-project/asterinas/commit/53cc887a25bbba32e34ec2cd5e2564376e44e3d0"
        },
        "date": 1792135253706,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100908.17",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "128865.98",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261016-050004"
      },
      {
        "commit": {
          "author": {
            "name": "Gaurav Vipat",
            "username": "gvipat",
            "email": "37859950+gvipat@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e8a2fd2ef6a9f1836304bed626e829755e082f5a",
          "message": "Add nightly benchmarking (#313)\n\nAdds scripts which use `nektos/act` to run\n`.github/workflows/benchmark_x86.yml` and push the `howdone` enriched\nresults to the [benchmark\ndashboard](https://github.com/ldos-project/benchmark).\n\n- The workflow is still runnable as an action but self hosted runner\nmust be configured and `UPLOAD_RESULTS` must be set so running it today\nwill do nothing.\n- Our fork of the [github benchmark\naction](https://github.com/ldos-project/github-action-benchmark.git) has\nbeen updated to `v1` and now optionally uploads the `howdone` tarball as\na release and links it on the dashboard.\n- A [custom landing page\n](https://github.com/ldos-project/github-action-benchmark.git) was added\nto mirror upstream.\n- The provenance and log upload is predicated on the `act` environment\nsince actions track these for free.\n- A `SAVE_LOGS` flag was added to\n`test/initramfs/src/benchmark/bench_linux_and_aster.sh` to facilitate\nlog capture.\n- `.howdone.yaml` was updated to capture\nact context and match the logs and results.\n- `tools/benchmarks/README.md` documents the runner setup process.\n- The redis benchmark summary was also updated to include YCSB.",
          "timestamp": "2026-10-17T02:47:06Z",
          "url": "https://github.com/ldos-project/asterinas/commit/e8a2fd2ef6a9f1836304bed626e829755e082f5a"
        },
        "date": 1792222098160,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "98231.83",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "130548.30",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261017-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Yingqi Cao",
            "username": "ioeddk",
            "email": "78573313+ioeddk@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7c7062aa7e7b96f92d2fda524a633a8164f58f7e",
          "message": "Integrating IO Replayer Benchmark (#317)\n\nIntegrating the IO benchmark for block devices and RAID, pulled from its [source](https://github.com/utcs-scea/LAKE/tree/main/src/linnos/io_replayer/src) from the LAKE project.",
          "timestamp": "2026-10-17T20:26:11Z",
          "url": "https://github.com/ldos-project/asterinas/commit/7c7062aa7e7b96f92d2fda524a633a8164f58f7e"
        },
        "date": 1792309664533,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "98619.32",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "129701.68",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261018-050003"
      },
      {
        "commit": {
          "author": {
            "name": "Yingqi Cao",
            "username": "ioeddk",
            "email": "78573313+ioeddk@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7c7062aa7e7b96f92d2fda524a633a8164f58f7e",
          "message": "Integrating IO Replayer Benchmark (#317)\n\nIntegrating the IO benchmark for block devices and RAID, pulled from its [source](https://github.com/utcs-scea/LAKE/tree/main/src/linnos/io_replayer/src) from the LAKE project.",
          "timestamp": "2026-10-17T20:26:11Z",
          "url": "https://github.com/ldos-project/asterinas/commit/7c7062aa7e7b96f92d2fda524a633a8164f58f7e"
        },
        "date": 1792395261281,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100908.17",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "128205.13",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261019-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Yingqi Cao",
            "username": "ioeddk",
            "email": "78573313+ioeddk@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7c7062aa7e7b96f92d2fda524a633a8164f58f7e",
          "message": "Integrating IO Replayer Benchmark (#317)\n\nIntegrating the IO benchmark for block devices and RAID, pulled from its [source](https://github.com/utcs-scea/LAKE/tree/main/src/linnos/io_replayer/src) from the LAKE project.",
          "timestamp": "2026-10-17T20:26:11Z",
          "url": "https://github.com/ldos-project/asterinas/commit/7c7062aa7e7b96f92d2fda524a633a8164f58f7e"
        },
        "date": 1792481805610,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "102354.15",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "129198.97",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261020-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Aneesh Durg",
            "username": "aneeshdurg",
            "email": "aneeshdurg17@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2c74cb02bd0db3282de4ca3512c75cd3775e2f60",
          "message": "Make the OQueue last_consumer lock IRQ-safe (#320)\n\nProducing to an OQueue takes `last_consumer` in `wake_after_produce`.\nSome OQueues are produced from IRQ context (e.g. `scheduler.events`\nWakeups published when a virtio-blk completion wakes a waiter), so a\ntask holding the preempt-only lock could be interrupted by a handler\nspinning on the same lock, deadlocking that CPU. Use `LocalIrqDisabled`,\nas `inner` does.\n\nA ktest checks that holding the lock disables local IRQs.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-20T21:39:06Z",
          "url": "https://github.com/ldos-project/asterinas/commit/2c74cb02bd0db3282de4ca3512c75cd3775e2f60"
        },
        "date": 1792574489315,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100000.00",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "128865.98",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261021-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Aneesh Durg",
            "username": "aneeshdurg",
            "email": "aneeshdurg17@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2c74cb02bd0db3282de4ca3512c75cd3775e2f60",
          "message": "Make the OQueue last_consumer lock IRQ-safe (#320)\n\nProducing to an OQueue takes `last_consumer` in `wake_after_produce`.\nSome OQueues are produced from IRQ context (e.g. `scheduler.events`\nWakeups published when a virtio-blk completion wakes a waiter), so a\ntask holding the preempt-only lock could be interrupted by a handler\nspinning on the same lock, deadlocking that CPU. Use `LocalIrqDisabled`,\nas `inner` does.\n\nA ktest checks that holding the lock disables local IRQs.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-20T21:39:06Z",
          "url": "https://github.com/ldos-project/asterinas/commit/2c74cb02bd0db3282de4ca3512c75cd3775e2f60"
        },
        "date": 1792654600636,
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
            "value": "128040.97",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261022-050001"
      },
      {
        "commit": {
          "author": {
            "name": "Aneesh Durg",
            "username": "aneeshdurg",
            "email": "aneeshdurg17@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2c74cb02bd0db3282de4ca3512c75cd3775e2f60",
          "message": "Make the OQueue last_consumer lock IRQ-safe (#320)\n\nProducing to an OQueue takes `last_consumer` in `wake_after_produce`.\nSome OQueues are produced from IRQ context (e.g. `scheduler.events`\nWakeups published when a virtio-blk completion wakes a waiter), so a\ntask holding the preempt-only lock could be interrupted by a handler\nspinning on the same lock, deadlocking that CPU. Use `LocalIrqDisabled`,\nas `inner` does.\n\nA ktest checks that holding the lock disables local IRQs.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-20T21:39:06Z",
          "url": "https://github.com/ldos-project/asterinas/commit/2c74cb02bd0db3282de4ca3512c75cd3775e2f60"
        },
        "date": 1792741784148,
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
            "value": "132275.14",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261023-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Peters",
            "username": "arthurp",
            "email": "amp@cs.utexas.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d168f0b9c779cff21534133f127d737d37212b5d",
          "message": " Fix trailing-whitespace check.  (#337)\n\nChange trailing whitespace check to check for resulting lines, not the\nexit code of xargs. When xargs produces multiple call it effectively\nperforms an \"and\" instead of an \"or\". Previously, the check would always\nsucceed if there were enough files to be split across multiple calls.",
          "timestamp": "2026-10-23T20:51:08Z",
          "url": "https://github.com/ldos-project/asterinas/commit/d168f0b9c779cff21534133f127d737d37212b5d"
        },
        "date": 1792827445977,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100300.91",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "131752.31",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261024-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Peters",
            "username": "arthurp",
            "email": "amp@cs.utexas.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d168f0b9c779cff21534133f127d737d37212b5d",
          "message": " Fix trailing-whitespace check.  (#337)\n\nChange trailing whitespace check to check for resulting lines, not the\nexit code of xargs. When xargs produces multiple call it effectively\nperforms an \"and\" instead of an \"or\". Previously, the check would always\nsucceed if there were enough files to be split across multiple calls.",
          "timestamp": "2026-10-23T20:51:08Z",
          "url": "https://github.com/ldos-project/asterinas/commit/d168f0b9c779cff21534133f127d737d37212b5d"
        },
        "date": 1792914354352,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "99206.34",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "127388.53",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261025-050001"
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Peters",
            "username": "arthurp",
            "email": "amp@cs.utexas.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d168f0b9c779cff21534133f127d737d37212b5d",
          "message": " Fix trailing-whitespace check.  (#337)\n\nChange trailing whitespace check to check for resulting lines, not the\nexit code of xargs. When xargs produces multiple call it effectively\nperforms an \"and\" instead of an \"or\". Previously, the check would always\nsucceed if there were enough files to be split across multiple calls.",
          "timestamp": "2026-10-23T20:51:08Z",
          "url": "https://github.com/ldos-project/asterinas/commit/d168f0b9c779cff21534133f127d737d37212b5d"
        },
        "date": 1793000240789,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "101214.58",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "127713.92",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261026-050002"
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
        "date": 1790235963101,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "102145.05",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "139082.06",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260924-050002"
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
        "date": 1790320800792,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "100502.52",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "132275.14",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260925-050002"
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
        "date": 1790493423024,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "102880.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "139470.02",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260927-050002"
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
        "date": 1790583089992,
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
            "value": "134952.77",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260928-050002"
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
        "date": 1790667970654,
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
            "value": "133511.34",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260929-050002"
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
        "date": 1790755197547,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "100300.91",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "134048.27",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260930-050002"
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
        "date": 1790840031324,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "102669.41",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "132275.14",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261001-050002"
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
        "date": 1790924950763,
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
            "value": "140056.03",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261002-050002"
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
        "date": 1791013258287,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "102564.10",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "132978.73",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261003-050002"
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
        "date": 1791098322865,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "101419.88",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "133689.83",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261004-050002"
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
        "date": 1791185320339,
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
            "value": "133689.83",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261005-050001"
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
        "date": 1791272119052,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "100603.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "137362.64",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261006-050002"
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
        "date": 1791359894949,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "102880.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "138888.89",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261007-050002"
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
        "date": 1791444484216,
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
            "value": "143472.02",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261008-050002"
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
        "date": 1791531184803,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "102880.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "139664.80",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261009-050002"
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
        "date": 1791616988959,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "101317.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "140449.44",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261010-050002"
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
        "date": 1791703570709,
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
            "value": "134589.50",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261011-050002"
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
        "date": 1791790380552,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "101112.23",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "132275.14",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261012-050001"
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
        "date": 1791876026075,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "101522.84",
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
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261013-050002"
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
        "date": 1791963173201,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "101936.80",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "132802.12",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261014-050002"
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
          "id": "29ebdd325dcf2c8afb6b5cf9d0eccf091c003c36",
          "message": "Remove dead log message",
          "timestamp": "2026-10-15T00:08:26Z",
          "url": "https://github.com/ldos-project/asterinas/commit/29ebdd325dcf2c8afb6b5cf9d0eccf091c003c36"
        },
        "date": 1792049679498,
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
            "value": "133868.81",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261015-050002"
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
          "id": "53cc887a25bbba32e34ec2cd5e2564376e44e3d0",
          "message": "Fix typo",
          "timestamp": "2026-10-16T01:04:34Z",
          "url": "https://github.com/ldos-project/asterinas/commit/53cc887a25bbba32e34ec2cd5e2564376e44e3d0"
        },
        "date": 1792135253237,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "103626.95",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "132802.12",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261016-050004"
      },
      {
        "commit": {
          "author": {
            "name": "Gaurav Vipat",
            "username": "gvipat",
            "email": "37859950+gvipat@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e8a2fd2ef6a9f1836304bed626e829755e082f5a",
          "message": "Add nightly benchmarking (#313)\n\nAdds scripts which use `nektos/act` to run\n`.github/workflows/benchmark_x86.yml` and push the `howdone` enriched\nresults to the [benchmark\ndashboard](https://github.com/ldos-project/benchmark).\n\n- The workflow is still runnable as an action but self hosted runner\nmust be configured and `UPLOAD_RESULTS` must be set so running it today\nwill do nothing.\n- Our fork of the [github benchmark\naction](https://github.com/ldos-project/github-action-benchmark.git) has\nbeen updated to `v1` and now optionally uploads the `howdone` tarball as\na release and links it on the dashboard.\n- A [custom landing page\n](https://github.com/ldos-project/github-action-benchmark.git) was added\nto mirror upstream.\n- The provenance and log upload is predicated on the `act` environment\nsince actions track these for free.\n- A `SAVE_LOGS` flag was added to\n`test/initramfs/src/benchmark/bench_linux_and_aster.sh` to facilitate\nlog capture.\n- `.howdone.yaml` was updated to capture\nact context and match the logs and results.\n- `tools/benchmarks/README.md` documents the runner setup process.\n- The redis benchmark summary was also updated to include YCSB.",
          "timestamp": "2026-10-17T02:47:06Z",
          "url": "https://github.com/ldos-project/asterinas/commit/e8a2fd2ef6a9f1836304bed626e829755e082f5a"
        },
        "date": 1792222097682,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "101112.23",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "138121.55",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261017-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Yingqi Cao",
            "username": "ioeddk",
            "email": "78573313+ioeddk@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7c7062aa7e7b96f92d2fda524a633a8164f58f7e",
          "message": "Integrating IO Replayer Benchmark (#317)\n\nIntegrating the IO benchmark for block devices and RAID, pulled from its [source](https://github.com/utcs-scea/LAKE/tree/main/src/linnos/io_replayer/src) from the LAKE project.",
          "timestamp": "2026-10-17T20:26:11Z",
          "url": "https://github.com/ldos-project/asterinas/commit/7c7062aa7e7b96f92d2fda524a633a8164f58f7e"
        },
        "date": 1792309664007,
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
            "value": "132275.14",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261018-050003"
      },
      {
        "commit": {
          "author": {
            "name": "Yingqi Cao",
            "username": "ioeddk",
            "email": "78573313+ioeddk@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7c7062aa7e7b96f92d2fda524a633a8164f58f7e",
          "message": "Integrating IO Replayer Benchmark (#317)\n\nIntegrating the IO benchmark for block devices and RAID, pulled from its [source](https://github.com/utcs-scea/LAKE/tree/main/src/linnos/io_replayer/src) from the LAKE project.",
          "timestamp": "2026-10-17T20:26:11Z",
          "url": "https://github.com/ldos-project/asterinas/commit/7c7062aa7e7b96f92d2fda524a633a8164f58f7e"
        },
        "date": 1792395260775,
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
            "value": "139860.14",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261019-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Yingqi Cao",
            "username": "ioeddk",
            "email": "78573313+ioeddk@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7c7062aa7e7b96f92d2fda524a633a8164f58f7e",
          "message": "Integrating IO Replayer Benchmark (#317)\n\nIntegrating the IO benchmark for block devices and RAID, pulled from its [source](https://github.com/utcs-scea/LAKE/tree/main/src/linnos/io_replayer/src) from the LAKE project.",
          "timestamp": "2026-10-17T20:26:11Z",
          "url": "https://github.com/ldos-project/asterinas/commit/7c7062aa7e7b96f92d2fda524a633a8164f58f7e"
        },
        "date": 1792481805018,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "101522.84",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "133689.83",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261020-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Aneesh Durg",
            "username": "aneeshdurg",
            "email": "aneeshdurg17@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2c74cb02bd0db3282de4ca3512c75cd3775e2f60",
          "message": "Make the OQueue last_consumer lock IRQ-safe (#320)\n\nProducing to an OQueue takes `last_consumer` in `wake_after_produce`.\nSome OQueues are produced from IRQ context (e.g. `scheduler.events`\nWakeups published when a virtio-blk completion wakes a waiter), so a\ntask holding the preempt-only lock could be interrupted by a handler\nspinning on the same lock, deadlocking that CPU. Use `LocalIrqDisabled`,\nas `inner` does.\n\nA ktest checks that holding the lock disables local IRQs.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-20T21:39:06Z",
          "url": "https://github.com/ldos-project/asterinas/commit/2c74cb02bd0db3282de4ca3512c75cd3775e2f60"
        },
        "date": 1792574488730,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "100000.00",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "132978.73",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261021-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Aneesh Durg",
            "username": "aneeshdurg",
            "email": "aneeshdurg17@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2c74cb02bd0db3282de4ca3512c75cd3775e2f60",
          "message": "Make the OQueue last_consumer lock IRQ-safe (#320)\n\nProducing to an OQueue takes `last_consumer` in `wake_after_produce`.\nSome OQueues are produced from IRQ context (e.g. `scheduler.events`\nWakeups published when a virtio-blk completion wakes a waiter), so a\ntask holding the preempt-only lock could be interrupted by a handler\nspinning on the same lock, deadlocking that CPU. Use `LocalIrqDisabled`,\nas `inner` does.\n\nA ktest checks that holding the lock disables local IRQs.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-20T21:39:06Z",
          "url": "https://github.com/ldos-project/asterinas/commit/2c74cb02bd0db3282de4ca3512c75cd3775e2f60"
        },
        "date": 1792654600135,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "103092.78",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "131752.31",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261022-050001"
      },
      {
        "commit": {
          "author": {
            "name": "Aneesh Durg",
            "username": "aneeshdurg",
            "email": "aneeshdurg17@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2c74cb02bd0db3282de4ca3512c75cd3775e2f60",
          "message": "Make the OQueue last_consumer lock IRQ-safe (#320)\n\nProducing to an OQueue takes `last_consumer` in `wake_after_produce`.\nSome OQueues are produced from IRQ context (e.g. `scheduler.events`\nWakeups published when a virtio-blk completion wakes a waiter), so a\ntask holding the preempt-only lock could be interrupted by a handler\nspinning on the same lock, deadlocking that CPU. Use `LocalIrqDisabled`,\nas `inner` does.\n\nA ktest checks that holding the lock disables local IRQs.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-20T21:39:06Z",
          "url": "https://github.com/ldos-project/asterinas/commit/2c74cb02bd0db3282de4ca3512c75cd3775e2f60"
        },
        "date": 1792741783669,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "101729.40",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "131926.12",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261023-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Peters",
            "username": "arthurp",
            "email": "amp@cs.utexas.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d168f0b9c779cff21534133f127d737d37212b5d",
          "message": " Fix trailing-whitespace check.  (#337)\n\nChange trailing whitespace check to check for resulting lines, not the\nexit code of xargs. When xargs produces multiple call it effectively\nperforms an \"and\" instead of an \"or\". Previously, the check would always\nsucceed if there were enough files to be split across multiple calls.",
          "timestamp": "2026-10-23T20:51:08Z",
          "url": "https://github.com/ldos-project/asterinas/commit/d168f0b9c779cff21534133f127d737d37212b5d"
        },
        "date": 1792827445510,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "102564.10",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "132450.33",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261024-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Peters",
            "username": "arthurp",
            "email": "amp@cs.utexas.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d168f0b9c779cff21534133f127d737d37212b5d",
          "message": " Fix trailing-whitespace check.  (#337)\n\nChange trailing whitespace check to check for resulting lines, not the\nexit code of xargs. When xargs produces multiple call it effectively\nperforms an \"and\" instead of an \"or\". Previously, the check would always\nsucceed if there were enough files to be split across multiple calls.",
          "timestamp": "2026-10-23T20:51:08Z",
          "url": "https://github.com/ldos-project/asterinas/commit/d168f0b9c779cff21534133f127d737d37212b5d"
        },
        "date": 1792914353886,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "104275.29",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "139664.80",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261025-050001"
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Peters",
            "username": "arthurp",
            "email": "amp@cs.utexas.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d168f0b9c779cff21534133f127d737d37212b5d",
          "message": " Fix trailing-whitespace check.  (#337)\n\nChange trailing whitespace check to check for resulting lines, not the\nexit code of xargs. When xargs produces multiple call it effectively\nperforms an \"and\" instead of an \"or\". Previously, the check would always\nsucceed if there were enough files to be split across multiple calls.",
          "timestamp": "2026-10-23T20:51:08Z",
          "url": "https://github.com/ldos-project/asterinas/commit/d168f0b9c779cff21534133f127d737d37212b5d"
        },
        "date": 1793000240374,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "101626.02",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "131061.59",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261026-050002"
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
        "date": 1790221551772,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "100300.91",
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
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260924-011720"
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
        "date": 1790235963959,
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
            "value": "130718.95",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260924-050002"
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
        "date": 1790320801746,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "100806.45",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "135869.56",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260925-050002"
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
        "date": 1790407907205,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "99502.48",
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
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260926-050002"
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
        "date": 1790493423908,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "101112.23",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "133333.33",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260927-050002"
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
        "date": 1790583090855,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "102249.49",
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
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260928-050002"
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
        "date": 1790667971624,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "100603.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "131926.12",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260929-050002"
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
        "date": 1790755198392,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "102459.02",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "136054.42",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260930-050002"
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
        "date": 1790924951677,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "100300.91",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "132450.33",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261002-050002"
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
        "date": 1791013259184,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "100806.45",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "135685.22",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261003-050002"
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
        "date": 1791098323731,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "99502.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "130890.05",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261004-050002"
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
        "date": 1791185321456,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "100908.17",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "131926.12",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261005-050001"
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
        "date": 1791272119954,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "101419.88",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "131578.95",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261006-050002"
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
        "date": 1791359895889,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "98911.96",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "133511.34",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261007-050002"
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
        "date": 1791444485144,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "102774.92",
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
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261008-050002"
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
        "date": 1791531185728,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "99403.58",
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
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261009-050002"
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
        "date": 1791616989964,
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
            "value": "132802.12",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261010-050002"
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
        "date": 1791703571589,
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
            "value": "133689.83",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261011-050002"
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
        "date": 1791790381391,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "98522.17",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "137741.05",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261012-050001"
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
        "date": 1791876026995,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "100300.91",
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
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261013-050002"
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
        "date": 1791963174057,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "99900.09",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "130378.09",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261014-050002"
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
          "id": "29ebdd325dcf2c8afb6b5cf9d0eccf091c003c36",
          "message": "Remove dead log message",
          "timestamp": "2026-10-15T00:08:26Z",
          "url": "https://github.com/ldos-project/asterinas/commit/29ebdd325dcf2c8afb6b5cf9d0eccf091c003c36"
        },
        "date": 1792049680451,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "103842.16",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "131926.12",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261015-050002"
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
          "id": "53cc887a25bbba32e34ec2cd5e2564376e44e3d0",
          "message": "Fix typo",
          "timestamp": "2026-10-16T01:04:34Z",
          "url": "https://github.com/ldos-project/asterinas/commit/53cc887a25bbba32e34ec2cd5e2564376e44e3d0"
        },
        "date": 1792135254173,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "99009.90",
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
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261016-050004"
      },
      {
        "commit": {
          "author": {
            "name": "Gaurav Vipat",
            "username": "gvipat",
            "email": "37859950+gvipat@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e8a2fd2ef6a9f1836304bed626e829755e082f5a",
          "message": "Add nightly benchmarking (#313)\n\nAdds scripts which use `nektos/act` to run\n`.github/workflows/benchmark_x86.yml` and push the `howdone` enriched\nresults to the [benchmark\ndashboard](https://github.com/ldos-project/benchmark).\n\n- The workflow is still runnable as an action but self hosted runner\nmust be configured and `UPLOAD_RESULTS` must be set so running it today\nwill do nothing.\n- Our fork of the [github benchmark\naction](https://github.com/ldos-project/github-action-benchmark.git) has\nbeen updated to `v1` and now optionally uploads the `howdone` tarball as\na release and links it on the dashboard.\n- A [custom landing page\n](https://github.com/ldos-project/github-action-benchmark.git) was added\nto mirror upstream.\n- The provenance and log upload is predicated on the `act` environment\nsince actions track these for free.\n- A `SAVE_LOGS` flag was added to\n`test/initramfs/src/benchmark/bench_linux_and_aster.sh` to facilitate\nlog capture.\n- `.howdone.yaml` was updated to capture\nact context and match the logs and results.\n- `tools/benchmarks/README.md` documents the runner setup process.\n- The redis benchmark summary was also updated to include YCSB.",
          "timestamp": "2026-10-17T02:47:06Z",
          "url": "https://github.com/ldos-project/asterinas/commit/e8a2fd2ef6a9f1836304bed626e829755e082f5a"
        },
        "date": 1792222098661,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "101317.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "130378.09",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261017-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Yingqi Cao",
            "username": "ioeddk",
            "email": "78573313+ioeddk@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7c7062aa7e7b96f92d2fda524a633a8164f58f7e",
          "message": "Integrating IO Replayer Benchmark (#317)\n\nIntegrating the IO benchmark for block devices and RAID, pulled from its [source](https://github.com/utcs-scea/LAKE/tree/main/src/linnos/io_replayer/src) from the LAKE project.",
          "timestamp": "2026-10-17T20:26:11Z",
          "url": "https://github.com/ldos-project/asterinas/commit/7c7062aa7e7b96f92d2fda524a633a8164f58f7e"
        },
        "date": 1792309665058,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "99700.90",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "131578.95",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261018-050003"
      },
      {
        "commit": {
          "author": {
            "name": "Yingqi Cao",
            "username": "ioeddk",
            "email": "78573313+ioeddk@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7c7062aa7e7b96f92d2fda524a633a8164f58f7e",
          "message": "Integrating IO Replayer Benchmark (#317)\n\nIntegrating the IO benchmark for block devices and RAID, pulled from its [source](https://github.com/utcs-scea/LAKE/tree/main/src/linnos/io_replayer/src) from the LAKE project.",
          "timestamp": "2026-10-17T20:26:11Z",
          "url": "https://github.com/ldos-project/asterinas/commit/7c7062aa7e7b96f92d2fda524a633a8164f58f7e"
        },
        "date": 1792395261858,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "100908.17",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "134228.19",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261019-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Yingqi Cao",
            "username": "ioeddk",
            "email": "78573313+ioeddk@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7c7062aa7e7b96f92d2fda524a633a8164f58f7e",
          "message": "Integrating IO Replayer Benchmark (#317)\n\nIntegrating the IO benchmark for block devices and RAID, pulled from its [source](https://github.com/utcs-scea/LAKE/tree/main/src/linnos/io_replayer/src) from the LAKE project.",
          "timestamp": "2026-10-17T20:26:11Z",
          "url": "https://github.com/ldos-project/asterinas/commit/7c7062aa7e7b96f92d2fda524a633a8164f58f7e"
        },
        "date": 1792481806149,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "101522.84",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "129533.68",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261020-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Aneesh Durg",
            "username": "aneeshdurg",
            "email": "aneeshdurg17@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2c74cb02bd0db3282de4ca3512c75cd3775e2f60",
          "message": "Make the OQueue last_consumer lock IRQ-safe (#320)\n\nProducing to an OQueue takes `last_consumer` in `wake_after_produce`.\nSome OQueues are produced from IRQ context (e.g. `scheduler.events`\nWakeups published when a virtio-blk completion wakes a waiter), so a\ntask holding the preempt-only lock could be interrupted by a handler\nspinning on the same lock, deadlocking that CPU. Use `LocalIrqDisabled`,\nas `inner` does.\n\nA ktest checks that holding the lock disables local IRQs.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-20T21:39:06Z",
          "url": "https://github.com/ldos-project/asterinas/commit/2c74cb02bd0db3282de4ca3512c75cd3775e2f60"
        },
        "date": 1792574489764,
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
            "value": "130039.02",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261021-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Aneesh Durg",
            "username": "aneeshdurg",
            "email": "aneeshdurg17@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2c74cb02bd0db3282de4ca3512c75cd3775e2f60",
          "message": "Make the OQueue last_consumer lock IRQ-safe (#320)\n\nProducing to an OQueue takes `last_consumer` in `wake_after_produce`.\nSome OQueues are produced from IRQ context (e.g. `scheduler.events`\nWakeups published when a virtio-blk completion wakes a waiter), so a\ntask holding the preempt-only lock could be interrupted by a handler\nspinning on the same lock, deadlocking that CPU. Use `LocalIrqDisabled`,\nas `inner` does.\n\nA ktest checks that holding the lock disables local IRQs.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-20T21:39:06Z",
          "url": "https://github.com/ldos-project/asterinas/commit/2c74cb02bd0db3282de4ca3512c75cd3775e2f60"
        },
        "date": 1792654601106,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "102249.49",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "130039.02",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261022-050001"
      },
      {
        "commit": {
          "author": {
            "name": "Aneesh Durg",
            "username": "aneeshdurg",
            "email": "aneeshdurg17@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2c74cb02bd0db3282de4ca3512c75cd3775e2f60",
          "message": "Make the OQueue last_consumer lock IRQ-safe (#320)\n\nProducing to an OQueue takes `last_consumer` in `wake_after_produce`.\nSome OQueues are produced from IRQ context (e.g. `scheduler.events`\nWakeups published when a virtio-blk completion wakes a waiter), so a\ntask holding the preempt-only lock could be interrupted by a handler\nspinning on the same lock, deadlocking that CPU. Use `LocalIrqDisabled`,\nas `inner` does.\n\nA ktest checks that holding the lock disables local IRQs.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-20T21:39:06Z",
          "url": "https://github.com/ldos-project/asterinas/commit/2c74cb02bd0db3282de4ca3512c75cd3775e2f60"
        },
        "date": 1792741784653,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "100908.17",
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
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261023-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Peters",
            "username": "arthurp",
            "email": "amp@cs.utexas.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d168f0b9c779cff21534133f127d737d37212b5d",
          "message": " Fix trailing-whitespace check.  (#337)\n\nChange trailing whitespace check to check for resulting lines, not the\nexit code of xargs. When xargs produces multiple call it effectively\nperforms an \"and\" instead of an \"or\". Previously, the check would always\nsucceed if there were enough files to be split across multiple calls.",
          "timestamp": "2026-10-23T20:51:08Z",
          "url": "https://github.com/ldos-project/asterinas/commit/d168f0b9c779cff21534133f127d737d37212b5d"
        },
        "date": 1792827446467,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "100806.45",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "129870.13",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261024-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Peters",
            "username": "arthurp",
            "email": "amp@cs.utexas.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d168f0b9c779cff21534133f127d737d37212b5d",
          "message": " Fix trailing-whitespace check.  (#337)\n\nChange trailing whitespace check to check for resulting lines, not the\nexit code of xargs. When xargs produces multiple call it effectively\nperforms an \"and\" instead of an \"or\". Previously, the check would always\nsucceed if there were enough files to be split across multiple calls.",
          "timestamp": "2026-10-23T20:51:08Z",
          "url": "https://github.com/ldos-project/asterinas/commit/d168f0b9c779cff21534133f127d737d37212b5d"
        },
        "date": 1792914354854,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "100000.00",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "130378.09",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261025-050001"
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Peters",
            "username": "arthurp",
            "email": "amp@cs.utexas.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d168f0b9c779cff21534133f127d737d37212b5d",
          "message": " Fix trailing-whitespace check.  (#337)\n\nChange trailing whitespace check to check for resulting lines, not the\nexit code of xargs. When xargs produces multiple call it effectively\nperforms an \"and\" instead of an \"or\". Previously, the check would always\nsucceed if there were enough files to be split across multiple calls.",
          "timestamp": "2026-10-23T20:51:08Z",
          "url": "https://github.com/ldos-project/asterinas/commit/d168f0b9c779cff21534133f127d737d37212b5d"
        },
        "date": 1793000241229,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "100000.00",
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
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261026-050002"
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
        "date": 1790235962681,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96618.36",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "125944.58",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260924-050002"
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
        "date": 1790320800412,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97276.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "126262.62",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260925-050002"
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
        "date": 1790407906295,
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
            "value": "125313.29",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260926-050002"
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
        "date": 1790493422593,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "95328.88",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "125944.58",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260927-050002"
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
        "date": 1790583089484,
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
            "value": "127877.23",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260928-050002"
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
        "date": 1790667970192,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96711.80",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "125156.45",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260929-050002"
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
        "date": 1790755197087,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "95147.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "125628.14",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260930-050002"
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
        "date": 1790840030903,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97751.71",
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
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261001-050002"
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
        "date": 1790924950353,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "99900.09",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "125470.52",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261002-050002"
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
        "date": 1791013257846,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "94339.62",
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
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261003-050002"
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
        "date": 1791098322429,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96711.80",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "125628.14",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261004-050002"
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
        "date": 1791185319882,
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
            "value": "126903.55",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261005-050001"
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
        "date": 1791272118592,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "95602.30",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "129198.97",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261006-050002"
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
        "date": 1791359894461,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "95969.28",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "125628.14",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261007-050002"
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
        "date": 1791444483773,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97181.73",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "126262.62",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261008-050002"
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
        "date": 1791531184343,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "98522.17",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "127064.80",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261009-050002"
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
        "date": 1791616988440,
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
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261010-050002"
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
        "date": 1791703570225,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97181.73",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "125000.00",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261011-050002"
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
        "date": 1791790380081,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "95693.78",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "125628.14",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261012-050001"
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
        "date": 1791876025512,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97276.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "126422.25",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261013-050002"
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
        "date": 1791963172718,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96805.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "127064.80",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261014-050002"
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
          "id": "29ebdd325dcf2c8afb6b5cf9d0eccf091c003c36",
          "message": "Remove dead log message",
          "timestamp": "2026-10-15T00:08:26Z",
          "url": "https://github.com/ldos-project/asterinas/commit/29ebdd325dcf2c8afb6b5cf9d0eccf091c003c36"
        },
        "date": 1792049679059,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "95877.28",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "127226.46",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261015-050002"
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
          "id": "53cc887a25bbba32e34ec2cd5e2564376e44e3d0",
          "message": "Fix typo",
          "timestamp": "2026-10-16T01:04:34Z",
          "url": "https://github.com/ldos-project/asterinas/commit/53cc887a25bbba32e34ec2cd5e2564376e44e3d0"
        },
        "date": 1792135252729,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96805.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "125628.14",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261016-050004"
      },
      {
        "commit": {
          "author": {
            "name": "Gaurav Vipat",
            "username": "gvipat",
            "email": "37859950+gvipat@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e8a2fd2ef6a9f1836304bed626e829755e082f5a",
          "message": "Add nightly benchmarking (#313)\n\nAdds scripts which use `nektos/act` to run\n`.github/workflows/benchmark_x86.yml` and push the `howdone` enriched\nresults to the [benchmark\ndashboard](https://github.com/ldos-project/benchmark).\n\n- The workflow is still runnable as an action but self hosted runner\nmust be configured and `UPLOAD_RESULTS` must be set so running it today\nwill do nothing.\n- Our fork of the [github benchmark\naction](https://github.com/ldos-project/github-action-benchmark.git) has\nbeen updated to `v1` and now optionally uploads the `howdone` tarball as\na release and links it on the dashboard.\n- A [custom landing page\n](https://github.com/ldos-project/github-action-benchmark.git) was added\nto mirror upstream.\n- The provenance and log upload is predicated on the `act` environment\nsince actions track these for free.\n- A `SAVE_LOGS` flag was added to\n`test/initramfs/src/benchmark/bench_linux_and_aster.sh` to facilitate\nlog capture.\n- `.howdone.yaml` was updated to capture\nact context and match the logs and results.\n- `tools/benchmarks/README.md` documents the runner setup process.\n- The redis benchmark summary was also updated to include YCSB.",
          "timestamp": "2026-10-17T02:47:06Z",
          "url": "https://github.com/ldos-project/asterinas/commit/e8a2fd2ef6a9f1836304bed626e829755e082f5a"
        },
        "date": 1792222097216,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96618.36",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "125313.29",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261017-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Yingqi Cao",
            "username": "ioeddk",
            "email": "78573313+ioeddk@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7c7062aa7e7b96f92d2fda524a633a8164f58f7e",
          "message": "Integrating IO Replayer Benchmark (#317)\n\nIntegrating the IO benchmark for block devices and RAID, pulled from its [source](https://github.com/utcs-scea/LAKE/tree/main/src/linnos/io_replayer/src) from the LAKE project.",
          "timestamp": "2026-10-17T20:26:11Z",
          "url": "https://github.com/ldos-project/asterinas/commit/7c7062aa7e7b96f92d2fda524a633a8164f58f7e"
        },
        "date": 1792309663518,
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
            "value": "125156.45",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261018-050003"
      },
      {
        "commit": {
          "author": {
            "name": "Yingqi Cao",
            "username": "ioeddk",
            "email": "78573313+ioeddk@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7c7062aa7e7b96f92d2fda524a633a8164f58f7e",
          "message": "Integrating IO Replayer Benchmark (#317)\n\nIntegrating the IO benchmark for block devices and RAID, pulled from its [source](https://github.com/utcs-scea/LAKE/tree/main/src/linnos/io_replayer/src) from the LAKE project.",
          "timestamp": "2026-10-17T20:26:11Z",
          "url": "https://github.com/ldos-project/asterinas/commit/7c7062aa7e7b96f92d2fda524a633a8164f58f7e"
        },
        "date": 1792395260249,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97465.88",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "128700.12",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261019-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Yingqi Cao",
            "username": "ioeddk",
            "email": "78573313+ioeddk@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7c7062aa7e7b96f92d2fda524a633a8164f58f7e",
          "message": "Integrating IO Replayer Benchmark (#317)\n\nIntegrating the IO benchmark for block devices and RAID, pulled from its [source](https://github.com/utcs-scea/LAKE/tree/main/src/linnos/io_replayer/src) from the LAKE project.",
          "timestamp": "2026-10-17T20:26:11Z",
          "url": "https://github.com/ldos-project/asterinas/commit/7c7062aa7e7b96f92d2fda524a633a8164f58f7e"
        },
        "date": 1792481804465,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97656.24",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "123304.56",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261020-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Aneesh Durg",
            "username": "aneeshdurg",
            "email": "aneeshdurg17@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2c74cb02bd0db3282de4ca3512c75cd3775e2f60",
          "message": "Make the OQueue last_consumer lock IRQ-safe (#320)\n\nProducing to an OQueue takes `last_consumer` in `wake_after_produce`.\nSome OQueues are produced from IRQ context (e.g. `scheduler.events`\nWakeups published when a virtio-blk completion wakes a waiter), so a\ntask holding the preempt-only lock could be interrupted by a handler\nspinning on the same lock, deadlocking that CPU. Use `LocalIrqDisabled`,\nas `inner` does.\n\nA ktest checks that holding the lock disables local IRQs.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-20T21:39:06Z",
          "url": "https://github.com/ldos-project/asterinas/commit/2c74cb02bd0db3282de4ca3512c75cd3775e2f60"
        },
        "date": 1792574488211,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97656.24",
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
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261021-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Aneesh Durg",
            "username": "aneeshdurg",
            "email": "aneeshdurg17@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2c74cb02bd0db3282de4ca3512c75cd3775e2f60",
          "message": "Make the OQueue last_consumer lock IRQ-safe (#320)\n\nProducing to an OQueue takes `last_consumer` in `wake_after_produce`.\nSome OQueues are produced from IRQ context (e.g. `scheduler.events`\nWakeups published when a virtio-blk completion wakes a waiter), so a\ntask holding the preempt-only lock could be interrupted by a handler\nspinning on the same lock, deadlocking that CPU. Use `LocalIrqDisabled`,\nas `inner` does.\n\nA ktest checks that holding the lock disables local IRQs.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-20T21:39:06Z",
          "url": "https://github.com/ldos-project/asterinas/commit/2c74cb02bd0db3282de4ca3512c75cd3775e2f60"
        },
        "date": 1792654599601,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96339.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "123609.39",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261022-050001"
      },
      {
        "commit": {
          "author": {
            "name": "Aneesh Durg",
            "username": "aneeshdurg",
            "email": "aneeshdurg17@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2c74cb02bd0db3282de4ca3512c75cd3775e2f60",
          "message": "Make the OQueue last_consumer lock IRQ-safe (#320)\n\nProducing to an OQueue takes `last_consumer` in `wake_after_produce`.\nSome OQueues are produced from IRQ context (e.g. `scheduler.events`\nWakeups published when a virtio-blk completion wakes a waiter), so a\ntask holding the preempt-only lock could be interrupted by a handler\nspinning on the same lock, deadlocking that CPU. Use `LocalIrqDisabled`,\nas `inner` does.\n\nA ktest checks that holding the lock disables local IRQs.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-20T21:39:06Z",
          "url": "https://github.com/ldos-project/asterinas/commit/2c74cb02bd0db3282de4ca3512c75cd3775e2f60"
        },
        "date": 1792741783153,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97847.36",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "123915.74",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261023-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Peters",
            "username": "arthurp",
            "email": "amp@cs.utexas.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d168f0b9c779cff21534133f127d737d37212b5d",
          "message": " Fix trailing-whitespace check.  (#337)\n\nChange trailing whitespace check to check for resulting lines, not the\nexit code of xargs. When xargs produces multiple call it effectively\nperforms an \"and\" instead of an \"or\". Previously, the check would always\nsucceed if there were enough files to be split across multiple calls.",
          "timestamp": "2026-10-23T20:51:08Z",
          "url": "https://github.com/ldos-project/asterinas/commit/d168f0b9c779cff21534133f127d737d37212b5d"
        },
        "date": 1792827445052,
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
            "value": "125470.52",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261024-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Peters",
            "username": "arthurp",
            "email": "amp@cs.utexas.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d168f0b9c779cff21534133f127d737d37212b5d",
          "message": " Fix trailing-whitespace check.  (#337)\n\nChange trailing whitespace check to check for resulting lines, not the\nexit code of xargs. When xargs produces multiple call it effectively\nperforms an \"and\" instead of an \"or\". Previously, the check would always\nsucceed if there were enough files to be split across multiple calls.",
          "timestamp": "2026-10-23T20:51:08Z",
          "url": "https://github.com/ldos-project/asterinas/commit/d168f0b9c779cff21534133f127d737d37212b5d"
        },
        "date": 1792914353420,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97943.19",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "124378.11",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261025-050001"
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Peters",
            "username": "arthurp",
            "email": "amp@cs.utexas.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d168f0b9c779cff21534133f127d737d37212b5d",
          "message": " Fix trailing-whitespace check.  (#337)\n\nChange trailing whitespace check to check for resulting lines, not the\nexit code of xargs. When xargs produces multiple call it effectively\nperforms an \"and\" instead of an \"or\". Previously, the check would always\nsucceed if there were enough files to be split across multiple calls.",
          "timestamp": "2026-10-23T20:51:08Z",
          "url": "https://github.com/ldos-project/asterinas/commit/d168f0b9c779cff21534133f127d737d37212b5d"
        },
        "date": 1793000239900,
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
            "value": "125628.14",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261026-050002"
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
        "date": 1790235962280,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8208.416833667334",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3439.1267842149455",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260924-050002"
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
        "date": 1790320799954,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8015.6555772994125",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3346.40522875817",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260925-050002"
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
        "date": 1790407905851,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8175.64870259481",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3433.36127409891",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260926-050002"
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
        "date": 1790493422201,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8241.448692152917",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3305.8918482647296",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260927-050002"
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
        "date": 1790583089070,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8047.151277013752",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3343.673469387755",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260928-050002"
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
        "date": 1790667969732,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8000.0",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3410.491257285595",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260929-050002"
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
        "date": 1790755196625,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8342.158859470468",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3332.790886899919",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260930-050002"
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
        "date": 1790840030465,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8159.362549800797",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3421.8880534670006",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261001-050002"
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
        "date": 1790924949893,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8291.497975708502",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3303.2258064516127",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261002-050002"
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
        "date": 1791013257381,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8015.6555772994125",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3421.8880534670006",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261003-050002"
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
        "date": 1791098322000,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8159.362549800797",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3436.241610738255",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261004-050002"
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
        "date": 1791185319390,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8325.203252032521",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3427.615062761506",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261005-050001"
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
        "date": 1791272118125,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8047.151277013752",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3450.716090985678",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261006-050002"
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
        "date": 1791359893995,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8192.0",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3439.1267842149455",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261007-050002"
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
        "date": 1791444483271,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8062.992125984252",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3436.241610738255",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261008-050002"
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
        "date": 1791531183886,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8126.984126984127",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3421.8880534670006",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261009-050002"
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
        "date": 1791616987713,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8078.8954635108485",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3447.811447811448",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261010-050002"
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
        "date": 1791703569779,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8342.158859470468",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3419.0317195325542",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261011-050002"
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
        "date": 1791790379572,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8110.891089108911",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3436.241610738255",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261012-050001"
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
        "date": 1791876025061,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8159.362549800797",
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
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261013-050002"
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
        "date": 1791963172267,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8094.861660079051",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3343.673469387755",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261014-050002"
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
          "id": "29ebdd325dcf2c8afb6b5cf9d0eccf091c003c36",
          "message": "Remove dead log message",
          "timestamp": "2026-10-15T00:08:26Z",
          "url": "https://github.com/ldos-project/asterinas/commit/29ebdd325dcf2c8afb6b5cf9d0eccf091c003c36"
        },
        "date": 1792049678545,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8126.984126984127",
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
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261015-050002"
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
          "id": "53cc887a25bbba32e34ec2cd5e2564376e44e3d0",
          "message": "Fix typo",
          "timestamp": "2026-10-16T01:04:34Z",
          "url": "https://github.com/ldos-project/asterinas/commit/53cc887a25bbba32e34ec2cd5e2564376e44e3d0"
        },
        "date": 1792135252264,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8359.183673469388",
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
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261016-050004"
      },
      {
        "commit": {
          "author": {
            "name": "Gaurav Vipat",
            "username": "gvipat",
            "email": "37859950+gvipat@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e8a2fd2ef6a9f1836304bed626e829755e082f5a",
          "message": "Add nightly benchmarking (#313)\n\nAdds scripts which use `nektos/act` to run\n`.github/workflows/benchmark_x86.yml` and push the `howdone` enriched\nresults to the [benchmark\ndashboard](https://github.com/ldos-project/benchmark).\n\n- The workflow is still runnable as an action but self hosted runner\nmust be configured and `UPLOAD_RESULTS` must be set so running it today\nwill do nothing.\n- Our fork of the [github benchmark\naction](https://github.com/ldos-project/github-action-benchmark.git) has\nbeen updated to `v1` and now optionally uploads the `howdone` tarball as\na release and links it on the dashboard.\n- A [custom landing page\n](https://github.com/ldos-project/github-action-benchmark.git) was added\nto mirror upstream.\n- The provenance and log upload is predicated on the `act` environment\nsince actions track these for free.\n- A `SAVE_LOGS` flag was added to\n`test/initramfs/src/benchmark/bench_linux_and_aster.sh` to facilitate\nlog capture.\n- `.howdone.yaml` was updated to capture\nact context and match the logs and results.\n- `tools/benchmarks/README.md` documents the runner setup process.\n- The redis benchmark summary was also updated to include YCSB.",
          "timestamp": "2026-10-17T02:47:06Z",
          "url": "https://github.com/ldos-project/asterinas/commit/e8a2fd2ef6a9f1836304bed626e829755e082f5a"
        },
        "date": 1792222096748,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8110.891089108911",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3410.491257285595",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261017-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Yingqi Cao",
            "username": "ioeddk",
            "email": "78573313+ioeddk@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7c7062aa7e7b96f92d2fda524a633a8164f58f7e",
          "message": "Integrating IO Replayer Benchmark (#317)\n\nIntegrating the IO benchmark for block devices and RAID, pulled from its [source](https://github.com/utcs-scea/LAKE/tree/main/src/linnos/io_replayer/src) from the LAKE project.",
          "timestamp": "2026-10-17T20:26:11Z",
          "url": "https://github.com/ldos-project/asterinas/commit/7c7062aa7e7b96f92d2fda524a633a8164f58f7e"
        },
        "date": 1792309662974,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8143.141153081511",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3382.3286540049544",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261018-050003"
      },
      {
        "commit": {
          "author": {
            "name": "Yingqi Cao",
            "username": "ioeddk",
            "email": "78573313+ioeddk@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7c7062aa7e7b96f92d2fda524a633a8164f58f7e",
          "message": "Integrating IO Replayer Benchmark (#317)\n\nIntegrating the IO benchmark for block devices and RAID, pulled from its [source](https://github.com/utcs-scea/LAKE/tree/main/src/linnos/io_replayer/src) from the LAKE project.",
          "timestamp": "2026-10-17T20:26:11Z",
          "url": "https://github.com/ldos-project/asterinas/commit/7c7062aa7e7b96f92d2fda524a633a8164f58f7e"
        },
        "date": 1792395259696,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8208.416833667334",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3371.19341563786",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261019-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Yingqi Cao",
            "username": "ioeddk",
            "email": "78573313+ioeddk@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7c7062aa7e7b96f92d2fda524a633a8164f58f7e",
          "message": "Integrating IO Replayer Benchmark (#317)\n\nIntegrating the IO benchmark for block devices and RAID, pulled from its [source](https://github.com/utcs-scea/LAKE/tree/main/src/linnos/io_replayer/src) from the LAKE project.",
          "timestamp": "2026-10-17T20:26:11Z",
          "url": "https://github.com/ldos-project/asterinas/commit/7c7062aa7e7b96f92d2fda524a633a8164f58f7e"
        },
        "date": 1792481803982,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8094.861660079051",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3379.5379537953795",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261020-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Aneesh Durg",
            "username": "aneeshdurg",
            "email": "aneeshdurg17@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2c74cb02bd0db3282de4ca3512c75cd3775e2f60",
          "message": "Make the OQueue last_consumer lock IRQ-safe (#320)\n\nProducing to an OQueue takes `last_consumer` in `wake_after_produce`.\nSome OQueues are produced from IRQ context (e.g. `scheduler.events`\nWakeups published when a virtio-blk completion wakes a waiter), so a\ntask holding the preempt-only lock could be interrupted by a handler\nspinning on the same lock, deadlocking that CPU. Use `LocalIrqDisabled`,\nas `inner` does.\n\nA ktest checks that holding the lock disables local IRQs.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-20T21:39:06Z",
          "url": "https://github.com/ldos-project/asterinas/commit/2c74cb02bd0db3282de4ca3512c75cd3775e2f60"
        },
        "date": 1792574487733,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8241.448692152917",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3390.728476821192",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261021-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Aneesh Durg",
            "username": "aneeshdurg",
            "email": "aneeshdurg17@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2c74cb02bd0db3282de4ca3512c75cd3775e2f60",
          "message": "Make the OQueue last_consumer lock IRQ-safe (#320)\n\nProducing to an OQueue takes `last_consumer` in `wake_after_produce`.\nSome OQueues are produced from IRQ context (e.g. `scheduler.events`\nWakeups published when a virtio-blk completion wakes a waiter), so a\ntask holding the preempt-only lock could be interrupted by a handler\nspinning on the same lock, deadlocking that CPU. Use `LocalIrqDisabled`,\nas `inner` does.\n\nA ktest checks that holding the lock disables local IRQs.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-20T21:39:06Z",
          "url": "https://github.com/ldos-project/asterinas/commit/2c74cb02bd0db3282de4ca3512c75cd3775e2f60"
        },
        "date": 1792654599156,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8393.442622950819",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3385.123966942149",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261022-050001"
      },
      {
        "commit": {
          "author": {
            "name": "Aneesh Durg",
            "username": "aneeshdurg",
            "email": "aneeshdurg17@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2c74cb02bd0db3282de4ca3512c75cd3775e2f60",
          "message": "Make the OQueue last_consumer lock IRQ-safe (#320)\n\nProducing to an OQueue takes `last_consumer` in `wake_after_produce`.\nSome OQueues are produced from IRQ context (e.g. `scheduler.events`\nWakeups published when a virtio-blk completion wakes a waiter), so a\ntask holding the preempt-only lock could be interrupted by a handler\nspinning on the same lock, deadlocking that CPU. Use `LocalIrqDisabled`,\nas `inner` does.\n\nA ktest checks that holding the lock disables local IRQs.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-20T21:39:06Z",
          "url": "https://github.com/ldos-project/asterinas/commit/2c74cb02bd0db3282de4ca3512c75cd3775e2f60"
        },
        "date": 1792741782652,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8359.183673469388",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3300.5640612409347",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261023-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Peters",
            "username": "arthurp",
            "email": "amp@cs.utexas.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d168f0b9c779cff21534133f127d737d37212b5d",
          "message": " Fix trailing-whitespace check.  (#337)\n\nChange trailing whitespace check to check for resulting lines, not the\nexit code of xargs. When xargs produces multiple call it effectively\nperforms an \"and\" instead of an \"or\". Previously, the check would always\nsucceed if there were enough files to be split across multiple calls.",
          "timestamp": "2026-10-23T20:51:08Z",
          "url": "https://github.com/ldos-project/asterinas/commit/d168f0b9c779cff21534133f127d737d37212b5d"
        },
        "date": 1792827444541,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8308.316430020284",
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
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261024-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Peters",
            "username": "arthurp",
            "email": "amp@cs.utexas.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d168f0b9c779cff21534133f127d737d37212b5d",
          "message": " Fix trailing-whitespace check.  (#337)\n\nChange trailing whitespace check to check for resulting lines, not the\nexit code of xargs. When xargs produces multiple call it effectively\nperforms an \"and\" instead of an \"or\". Previously, the check would always\nsucceed if there were enough files to be split across multiple calls.",
          "timestamp": "2026-10-23T20:51:08Z",
          "url": "https://github.com/ldos-project/asterinas/commit/d168f0b9c779cff21534133f127d737d37212b5d"
        },
        "date": 1792914352912,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8208.416833667334",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3379.5379537953795",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261025-050001"
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Peters",
            "username": "arthurp",
            "email": "amp@cs.utexas.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d168f0b9c779cff21534133f127d737d37212b5d",
          "message": " Fix trailing-whitespace check.  (#337)\n\nChange trailing whitespace check to check for resulting lines, not the\nexit code of xargs. When xargs produces multiple call it effectively\nperforms an \"and\" instead of an \"or\". Previously, the check would always\nsucceed if there were enough files to be split across multiple calls.",
          "timestamp": "2026-10-23T20:51:08Z",
          "url": "https://github.com/ldos-project/asterinas/commit/d168f0b9c779cff21534133f127d737d37212b5d"
        },
        "date": 1793000239388,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8427.98353909465",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3382.3286540049544",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261026-050002"
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Peters",
            "username": "arthurp",
            "email": "amp@cs.utexas.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d168f0b9c779cff21534133f127d737d37212b5d",
          "message": " Fix trailing-whitespace check.  (#337)\n\nChange trailing whitespace check to check for resulting lines, not the\nexit code of xargs. When xargs produces multiple call it effectively\nperforms an \"and\" instead of an \"or\". Previously, the check would always\nsucceed if there were enough files to be split across multiple calls.",
          "timestamp": "2026-10-23T20:51:08Z",
          "url": "https://github.com/ldos-project/asterinas/commit/d168f0b9c779cff21534133f127d737d37212b5d"
        },
        "date": 1793086899484,
        "tool": "customBiggerIsBetter",
        "title": "YCSB Redis throughput under allocator stress (virtio-net, 16 threads, 4096-byte fields)",
        "description": "ycsb run redis -p redis.host=<guest_ip> -p redis.port=6379 -P ./workloads/workloada -p operationcount=4096 -p recordcount=4096 -p workload=site.ycsb.workloads.CoreWorkload -p readproportion=0.05 -p updateproportion=0.00 -p scanproportion=0.00 -p insertproportion=0.00 -p readmodifywriteproportion=0.00 -p deleteproportion=0.95 -p threadcount=16 -p fieldcount=1 -p fieldlength=4096 -p minfieldlength=4096 -p fieldlengthdistribution=uniform (run 4096 times; result taken from final iteration)",
        "display": true,
        "benches": [
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Linux",
            "value": "8308.316430020284",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Throughput (ops/sec) of YCSB Redis (delete-heavy, 4096-byte fields) on Guest Asterinas",
            "value": "3396.351575456053",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20261027-050001"
      }
    ]
  }
}