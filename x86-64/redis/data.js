window.BENCHMARK_DATA = {
  "lastUpdate": 1790019650487,
  "repoUrl": "https://github.com/ldos-project/asterinas",
  "entries": {
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