#!/usr/bin/env bash
snmpwalk -v 3 -u bootstrap -l authPriv -a MD5 -A temp_password -x DES -X temp_password 192.168.1.118 NET-SNMP-EXTEND-MIB::nsExtendObjects
snmpgetnext -v 3 -u bootstrap -l authPriv -a MD5 -A temp_password -x DES -X temp_password 192.168.1.118 NET-SNMP-EXTEND-MIB::nsExtendArgs
