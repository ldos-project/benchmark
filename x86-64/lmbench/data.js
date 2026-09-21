window.BENCHMARK_DATA = {
  "lastUpdate": 1790019799721,
  "repoUrl": "https://github.com/ldos-project/asterinas",
  "entries": {
    "unix_lat": [
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
        "date": 1790019795133,
        "tool": "customSmallerIsBetter",
        "title": "[Unix sockets] The latency of write+read (1B message)",
        "description": "lat_unix",
        "display": true,
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "2.6728",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "2.8033",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "unix_bw": [
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
        "date": 1790019796010,
        "tool": "customBiggerIsBetter",
        "title": "[Unix sockets] The bandwidth (64KB message)",
        "description": "bw_unix",
        "display": true,
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "12594.86",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "11972.93",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "unix_connect_lat": [
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
        "date": 1790019795571,
        "tool": "customSmallerIsBetter",
        "title": "[Unix sockets] The latency of connect",
        "description": "lat_connect",
        "display": true,
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.2228",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "4.3439",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "vfs_open_lat": [
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
        "date": 1790019793858,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of open+close",
        "description": "lat_syscall open",
        "display": true,
        "benches": [
          {
            "name": "Average open latency on Linux",
            "value": "0.6817",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average open latency on Asterinas",
            "value": "0.7117",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "vfs_read_lat": [
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
        "date": 1790019793390,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of read (/dev/zero)",
        "description": "lat_syscall read",
        "display": true,
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.0858",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.1426",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "vfs_write_lat": [
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
        "date": 1790019791669,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of write (/dev/null)",
        "description": "lat_syscall write",
        "display": true,
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.0713",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.1325",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "vfs_stat_lat": [
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
        "date": 1790019792102,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of stat",
        "description": "lat_syscall stat",
        "display": true,
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3014",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.3994",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "vfs_fstat_lat": [
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
        "date": 1790019794302,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of fstat",
        "description": "lat_syscall fstat",
        "display": true,
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.1165",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.1350",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "vfs_read_pagecache_bw": [
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
        "date": 1790019793005,
        "tool": "customBiggerIsBetter",
        "title": "[VFS] The bandwidth of file reads via page cache",
        "description": "bw_file_rd",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9803.89",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10969.31",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "vfs_select_lat": [
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
        "date": 1790019792526,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of select (file fds)",
        "description": "lat_select",
        "display": true,
        "benches": [
          {
            "name": "Average select file latency on Linux",
            "value": "1.4960",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average select file latency on Asterinas",
            "value": "2.4784",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "tcp_loopback_lat": [
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
        "date": 1790019798917,
        "tool": "customSmallerIsBetter",
        "title": "[TCP sockets] The latency of write+read (loopback, 1B message)",
        "description": "lat_tcp",
        "display": true,
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "5.0326",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "3.5582",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "tcp_loopback_select_lat": [
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
        "date": 1790019798491,
        "tool": "customSmallerIsBetter",
        "title": "[Network] The cost of select (TCP fds)",
        "description": "lat_select",
        "display": true,
        "benches": [
          {
            "name": "Average select TCP latency on Linux",
            "value": "3.2201",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average select TCP latency on Asterinas",
            "value": "2.8021",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "tcp_loopback_http_bw": [
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
        "date": 1790019799270,
        "tool": "customBiggerIsBetter",
        "title": "[HTTP] The bandwidth (loopback)",
        "description": "bw_http",
        "display": true,
        "benches": [
          {
            "name": "Average simple HTTP transaction bandwidth on Linux",
            "value": "4683.77",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average simple HTTP transaction bandwidth on Asterinas",
            "value": "1542.20",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "udp_loopback_lat": [
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
        "date": 1790019796876,
        "tool": "customSmallerIsBetter",
        "title": "[UDP sockets] The latency of write+read (loopback, 4B message)",
        "description": "lat_udp",
        "display": true,
        "benches": [
          {
            "name": "Average UDP latency on Linux",
            "value": "3.6792",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP latency on Asterinas",
            "value": "3.0939",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "tcp_virtio_bw_128": [
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
        "date": 1790019798089,
        "tool": "customBiggerIsBetter",
        "title": "[TCP sockets] The bandwidth (virtio-net, 128B message)",
        "description": "bw_tcp -l",
        "display": true,
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "292.59",
            "unit": "MB/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "292.22",
            "unit": "MB/sec",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "tcp_virtio_bw_64k": [
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
        "date": 1790019797637,
        "tool": "customBiggerIsBetter",
        "title": "[TCP sockets] The bandwidth (virtio-net, 64KB message)",
        "description": "bw_tcp -l",
        "display": true,
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "1044.45",
            "unit": "MB/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "985.70",
            "unit": "MB/sec",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "tcp_virtio_lat": [
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
        "date": 1790019797205,
        "tool": "customSmallerIsBetter",
        "title": "[TCP sockets] The latency of write+read (virtio-net, 1B message)",
        "description": "lat_tcp_virtio",
        "display": true,
        "benches": [
          {
            "name": "Average TCP latency over virtio-net on Linux",
            "value": "18.0575",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency over virtio-net on Asterinas",
            "value": "15.9988",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "udp_virtio_lat": [
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
        "date": 1790019796419,
        "tool": "customSmallerIsBetter",
        "title": "[UDP sockets] The latency of write+read (virtio-net, 4B message)",
        "description": "lat_udp",
        "display": true,
        "benches": [
          {
            "name": "Average UDP latency over virtio-net on Linux",
            "value": "15.4362",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP latency over virtio-net on Asterinas",
            "value": "13.4666",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "vfs_fcntl_lat": [
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
        "date": 1790019794751,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of record locking/unlocking via fcntl",
        "description": "lat_fcntl",
        "display": false,
        "benches": [
          {
            "name": "Average file locking latency on Linux",
            "value": "1.7871",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average file locking latency on Asterinas",
            "value": "0.5484",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "tcp_loopback_connect_lat": [
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
        "date": 1790019799718,
        "tool": "customSmallerIsBetter",
        "title": "[TCP sockets] The latency of connect (loopback)",
        "description": "lat_connect",
        "display": false,
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "20.7020",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "5324.6944",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ]
  }
}