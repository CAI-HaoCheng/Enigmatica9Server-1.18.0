@echo off

forfiles /p %cd% /s /m *.zip /d -3 /c "cmd /c del @path"