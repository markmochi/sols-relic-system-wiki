$ErrorActionPreference = 'Stop'

$wikiRoot = Split-Path -Parent $PSScriptRoot
$textureRoot = Join-Path $wikiRoot 'docs\assets\textures'
$imageRoot = Join-Path $wikiRoot 'docs\assets\images'

Get-ChildItem -LiteralPath $imageRoot -Filter '*.svg' | ForEach-Object {
    $svgPath = $_.FullName
    $content = [System.IO.File]::ReadAllText($svgPath)
    $matches = [regex]::Matches($content, 'href="\.\./textures/([^\"]+\.png)"')

    foreach ($match in $matches) {
        $fileName = $match.Groups[1].Value
        $texturePath = Join-Path $textureRoot $fileName
        if (-not (Test-Path -LiteralPath $texturePath)) {
            throw "Missing SVG texture: $texturePath"
        }
        $base64 = [Convert]::ToBase64String([System.IO.File]::ReadAllBytes($texturePath))
        $dataUri = 'href="data:image/png;base64,' + $base64 + '"'
        $content = $content.Replace($match.Value, $dataUri)
    }

    [System.IO.File]::WriteAllText($svgPath, $content, [System.Text.UTF8Encoding]::new($false))
}

