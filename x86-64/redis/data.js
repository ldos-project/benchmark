window.BENCHMARK_DATA = {
  "lastUpdate": 1790019786765,
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
        "display": false,
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
      }
    ]
  }
}