call npm run build

cd ..

call aws s3 cp C:\Desenvolvimento\michel_vitae\build s3://michel.net.br/ --recursive

pause