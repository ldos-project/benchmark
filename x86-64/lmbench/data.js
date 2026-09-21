window.BENCHMARK_DATA = {
  "lastUpdate": 1790026587743,
  "repoUrl": "https://github.com/ldos-project/asterinas",
  "entries": {
    "mem_pagefault_lat": [
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
        "date": 1790019807927,
        "tool": "customSmallerIsBetter",
        "title": "[Memory] The cost of page fault handling",
        "description": "lat_pagefault",
        "display": true,
        "benches": [
          {
            "name": "Average page fault latency on Linux",
            "value": "0.0929",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average page fault latency on Asterinas",
            "value": "0.1351",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "mem_mmap_bw": [
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
        "date": 1790019808767,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of mmap",
        "description": "bw_mmap",
        "display": true,
        "benches": [
          {
            "name": "Average mmap bandwidth on Linux",
            "value": "15180.43",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average mmap bandwidth on Asterinas",
            "value": "15208.84",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "mem_mmap_lat": [
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
        "date": 1790019808376,
        "tool": "customSmallerIsBetter",
        "title": "[Memory] The cost of mmap+unmap",
        "description": "lat_mmap",
        "display": true,
        "benches": [
          {
            "name": "Average mmap latency on Linux",
            "value": "18",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average mmap latency on Asterinas",
            "value": "26",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "process_getppid_lat": [
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
        "date": 1790019804603,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of getppid",
        "description": "lat_syscall null",
        "display": true,
        "benches": [
          {
            "name": "Average syscall latency on Linux",
            "value": "0.0515",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average syscall latency on Asterinas",
            "value": "0.0988",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "process_ctx_lat": [
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
        "date": 1790019805868,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of context switching",
        "description": "lat_ctx 2",
        "display": true,
        "benches": [
          {
            "name": "Average context switch latency on Linux",
            "value": "0.75",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average context switch latency on Asterinas",
            "value": "1.09",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "process_fork_lat": [
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
        "date": 1790019805047,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exit",
        "description": "lat_proc fork",
        "display": true,
        "benches": [
          {
            "name": "Average Fork latency on Linux",
            "value": "132.7143",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Fork latency on Asterinas",
            "value": "189.1165",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "process_exec_lat": [
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
        "date": 1790019805441,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exec+exit",
        "description": "lat_proc exec",
        "display": true,
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "847.4286",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "870.1429",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "process_shell_lat": [
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
        "date": 1790019803900,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exec+shell+exit",
        "description": "lat_proc shell",
        "display": true,
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "1196.4444",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "1239.9909",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "signal_install_lat": [
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
        "date": 1790019801790,
        "tool": "customSmallerIsBetter",
        "title": "[Signals] The cost of installing a signal handler",
        "description": "lat_sig install",
        "display": true,
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.0990",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.1675",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "signal_catch_lat": [
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
        "date": 1790019802199,
        "tool": "customSmallerIsBetter",
        "title": "[Signals] The cost of catching a signal",
        "description": "lat_sig catch",
        "display": true,
        "benches": [
          {
            "name": "Average Signal handler overhead on Linux",
            "value": "0.6812",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler overhead on Asterinas",
            "value": "0.8907",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "signal_prot_lat": [
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
        "date": 1790019801366,
        "tool": "customSmallerIsBetter",
        "title": "[Signals] The cost of catching a segfault",
        "description": "lat_sig prot",
        "display": true,
        "benches": [
          {
            "name": "Average protection fault latency on Linux",
            "value": "0.3505",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average protection fault latency on Asterinas",
            "value": "0.3388",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "pipe_lat": [
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
        "date": 1790019806259,
        "tool": "customSmallerIsBetter",
        "title": "[Pipes] The cost of write+read (1B)",
        "description": "lat_pipe",
        "display": true,
        "benches": [
          {
            "name": "Average pipe latency on Linux",
            "value": "1.8661",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe latency on Asterinas",
            "value": "2.4774",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "pipe_bw": [
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
        "date": 1790019806700,
        "tool": "customBiggerIsBetter",
        "title": "[Pipes] The bandwidth",
        "description": "bw_pipe",
        "display": true,
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10489.96",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "12765.66",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "fifo_lat": [
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
        "date": 1790019809571,
        "tool": "customSmallerIsBetter",
        "title": "[FIFO] The cost of write+read (1B)",
        "description": "lat_fifo",
        "display": true,
        "benches": [
          {
            "name": "Average fifo latency on Linux",
            "value": "1.7634",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fifo latency on Asterinas",
            "value": "2.4985",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
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
        "date": 1790026583864,
        "tool": "customSmallerIsBetter",
        "title": "[Unix sockets] The latency of write+read (1B message)",
        "description": "lat_unix",
        "display": true,
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "2.5479",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "2.8413",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
        "date": 1790026584690,
        "tool": "customBiggerIsBetter",
        "title": "[Unix sockets] The bandwidth (64KB message)",
        "description": "bw_unix",
        "display": true,
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "12440.72",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "12680.06",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
        "date": 1790026584263,
        "tool": "customSmallerIsBetter",
        "title": "[Unix sockets] The latency of connect",
        "description": "lat_connect",
        "display": true,
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.0690",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "4.3450",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
        "date": 1790026582571,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of open+close",
        "description": "lat_syscall open",
        "display": true,
        "benches": [
          {
            "name": "Average open latency on Linux",
            "value": "0.6804",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average open latency on Asterinas",
            "value": "0.7102",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
        "date": 1790026582075,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of read (/dev/zero)",
        "description": "lat_syscall read",
        "display": true,
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.0854",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.1414",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
        "date": 1790026580260,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of write (/dev/null)",
        "description": "lat_syscall write",
        "display": true,
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.0709",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.1329",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
        "date": 1790026580729,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of stat",
        "description": "lat_syscall stat",
        "display": true,
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.2981",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.3962",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
        "date": 1790026583020,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of fstat",
        "description": "lat_syscall fstat",
        "display": true,
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.1189",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.1357",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
        "date": 1790026581654,
        "tool": "customBiggerIsBetter",
        "title": "[VFS] The bandwidth of file reads via page cache",
        "description": "bw_file_rd",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9826.14",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10899.16",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
        "date": 1790026581185,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of select (file fds)",
        "description": "lat_select",
        "display": true,
        "benches": [
          {
            "name": "Average select file latency on Linux",
            "value": "1.4957",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average select file latency on Asterinas",
            "value": "2.4646",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
      }
    ],
    "ramfs_copy_files_bw": [
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
        "date": 1790019803452,
        "tool": "customBiggerIsBetter",
        "title": "[Ramfs] The bandwidth of copying data between files",
        "description": "lmdd",
        "display": true,
        "benches": [
          {
            "name": "Average file copy bandwidth on Linux",
            "value": "3268.3817",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file copy bandwidth on Asterinas",
            "value": "3711.7221",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "ramfs_create_delete_files_10k_ops": [
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
        "date": 1790019803059,
        "tool": "customBiggerIsBetter",
        "title": "[Ramfs] The throughput of creating/deleting small files (10KB)",
        "description": "lat_fs -s 10K",
        "display": true,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1474",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "14955",
            "unit": "number",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "ext2_copy_files_bw": [
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
        "date": 1790019810752,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of copying data between files",
        "description": "lmdd",
        "display": true,
        "benches": [
          {
            "name": "Average file copy bandwidth on Linux",
            "value": "1848.9710",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file copy bandwidth on Asterinas",
            "value": "221.9079",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "tcp_loopback_bw_128": [
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
        "date": 1790019801013,
        "tool": "customBiggerIsBetter",
        "title": "[TCP sockets] The bandwidth (loopback, 128B message)",
        "description": "bw_tcp -l",
        "display": true,
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "253.98",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "121.40",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "tcp_loopback_bw_4k": [
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
        "date": 1790019800598,
        "tool": "customBiggerIsBetter",
        "title": "[TCP sockets] The bandwidth (loopback, 4KB message)",
        "description": "bw_tcp -l",
        "display": true,
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "4859.37",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "3705.76",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "tcp_loopback_bw_64k": [
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
        "date": 1790019800175,
        "tool": "customBiggerIsBetter",
        "title": "[TCP sockets] The bandwidth (loopback, 64KB message)",
        "description": "bw_tcp -l",
        "display": true,
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "7398.07",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "7436.62",
            "unit": "MB/s",
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
        "date": 1790026587741,
        "tool": "customSmallerIsBetter",
        "title": "[Network] The cost of select (TCP fds)",
        "description": "lat_select",
        "display": true,
        "benches": [
          {
            "name": "Average select TCP latency on Linux",
            "value": "3.2206",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average select TCP latency on Asterinas",
            "value": "2.7648",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
        "date": 1790026585554,
        "tool": "customSmallerIsBetter",
        "title": "[UDP sockets] The latency of write+read (loopback, 4B message)",
        "description": "lat_udp",
        "display": true,
        "benches": [
          {
            "name": "Average UDP latency on Linux",
            "value": "3.7024",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP latency on Asterinas",
            "value": "3.1029",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
        "date": 1790026587281,
        "tool": "customBiggerIsBetter",
        "title": "[TCP sockets] The bandwidth (virtio-net, 128B message)",
        "description": "bw_tcp -l",
        "display": true,
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "291.32",
            "unit": "MB/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "292.37",
            "unit": "MB/sec",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
        "date": 1790026586846,
        "tool": "customBiggerIsBetter",
        "title": "[TCP sockets] The bandwidth (virtio-net, 64KB message)",
        "description": "bw_tcp -l",
        "display": true,
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "1043.01",
            "unit": "MB/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "959.58",
            "unit": "MB/sec",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
      }
    ],
    "tcp_virtio_connect_lat": [
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
        "date": 1790026586432,
        "tool": "customSmallerIsBetter",
        "title": "[TCP sockets] The latency of connect (virtio-net)",
        "description": "lat_connect",
        "display": true,
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "29.6257",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "32.6497",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
        "date": 1790026586005,
        "tool": "customSmallerIsBetter",
        "title": "[TCP sockets] The latency of write+read (virtio-net, 1B message)",
        "description": "lat_tcp_virtio",
        "display": true,
        "benches": [
          {
            "name": "Average TCP latency over virtio-net on Linux",
            "value": "18.2634",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency over virtio-net on Asterinas",
            "value": "15.8157",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
        "date": 1790026585113,
        "tool": "customSmallerIsBetter",
        "title": "[UDP sockets] The latency of write+read (virtio-net, 4B message)",
        "description": "lat_udp",
        "display": true,
        "benches": [
          {
            "name": "Average UDP latency over virtio-net on Linux",
            "value": "15.4941",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP latency over virtio-net on Asterinas",
            "value": "13.3510",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
        "date": 1790026583465,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of record locking/unlocking via fcntl",
        "description": "lat_fcntl",
        "display": false,
        "benches": [
          {
            "name": "Average file locking latency on Linux",
            "value": "1.7187",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average file locking latency on Asterinas",
            "value": "0.5433",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-042147"
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
    ],
    "semaphore_lat": [
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
        "date": 1790019802626,
        "tool": "customSmallerIsBetter",
        "title": "[Semaphores] The cost of semop",
        "description": "lat_sem",
        "display": false,
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.3712",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.4737",
            "unit": "µs",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "mem_write_bw": [
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
        "date": 1790019807114,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of writing integers",
        "description": "bw_mem fwr",
        "display": false,
        "benches": [
          {
            "name": "Average memory write bandwidth on Linux",
            "value": "8905.55",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory write bandwidth on Asterinas",
            "value": "8911.90",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "mem_read_bw": [
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
        "date": 1790019807490,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of reading integers",
        "description": "bw_mem frd",
        "display": false,
        "benches": [
          {
            "name": "Average memory read bandwidth on Linux",
            "value": "14341.80",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory read bandwidth on Asterinas",
            "value": "14311.21",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "mem_copy_bw": [
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
        "date": 1790019809217,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of copying integers",
        "description": "bw_mem fcp",
        "display": false,
        "benches": [
          {
            "name": "Average memory copy bandwidth on Linux",
            "value": "5948.18",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory copy bandwidth on Asterinas",
            "value": "5936.17",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "ext2_create_delete_files_10k_ops": [
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
        "date": 1790019809943,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The throughput of creating/deleting small files (10KB)",
        "description": "lat_fs -s 10K /ext2",
        "display": false,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "108",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "65",
            "unit": "number",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ],
    "ext2_create_delete_files_0k_ops": [
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
        "date": 1790019810301,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The throughput of creating/deleting small files (0KB)",
        "description": "lat_fs -s 0k /ext2",
        "display": false,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "90",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "379",
            "unit": "number",
            "extra": "aster_result"
          }
        ],
        "releaseUrl": "https://github.com/ldos-project/benchmark/releases/tag/run-20260919-165421"
      }
    ]
  }
}