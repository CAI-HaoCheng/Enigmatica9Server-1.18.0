@echo off

forfiles /p %cd% /s /m *.zip /d -1 /c "cmd /c del @path"