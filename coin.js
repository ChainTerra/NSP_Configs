var myCoin = {
    "name": "BitClout",
    "symbol": "BTCLT",
    "algorithm": "keccak",  
    /* This defaults to Vertcoin's timetable if not used. It is required for scrypt-n coins that
       have modified their N-factor timetable to be different than Vertcoin's. */
    "normalHashing": true
  /*  "timeTable": {
        "2048": 1390959880,
        "4096": 1438295269,
        "8192": 1485630658,
        "16384": 1532966047,
        "32768": 1580301436,
        "65536": 1627636825,
        "131072": 1674972214,
        "262144": 1722307603 */
    }
};
