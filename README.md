# MyAssets
A ClientAssets test project

Build BWBWebAppFramework.Blazor.Build and put the resulting nuget package in a local nuget feed.
(If you don't have spaces in your Project path, you should be able to use the standard Microsoft.ClientAssets package. instead of mine as it's just a copy of Microsoft.ClientAssets with some strategic placed quotes)
Modify the MyAsstes.csproj accordingly

Then build MyAssets
It should generate some JS from typescript files and some css from sass files
