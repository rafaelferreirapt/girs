snmpget -v 3 -u authOnlyUser -l authPriv -a MD5 -A temp_password -x DES -X temp_password cloud.rafaelferreira.pt 'NET-SNMP-EXTEND-MIB::nsExtendOutputFull."app1"'
snmpget -v 3 -u authOnlyUser -l authPriv -a MD5 -A temp_password -x DES -X temp_password cloud.rafaelferreira.pt 'NET-SNMP-EXTEND-MIB::nsExtendOutputFull."app2"'
