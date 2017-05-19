#!/bin/bash

./cleanup.sh

sed -e 's~<num>~0~g' mongo-node-template.yaml | kubectl create -f -
sed -e 's~<num>~1~g' mongo-node-template.yaml | kubectl create -f -
sed -e 's~<num>~2~g' mongo-node-template.yaml | kubectl create -f -
sleep 10
kubectl create -f nodeJsMongoApp.yaml


