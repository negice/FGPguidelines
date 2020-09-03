# build all plugins from this list. Add your own folder plugin to build
# package.json must exist with the build and deploy command
plugins=("chart" "draw" "range-slider" "swiper" "thematic-slider")

echo "Start build all process!"
for plugin in "${plugins[@]}"
do
    echo "Start process on $plugin"
    cd $plugin
    npm install > /dev/null 2>&1
    npm run build > /dev/null 2>&1
    npm run deploy > /dev/null 2>&1
    cd ..
    echo "End process on $plugin"
done
echo "End build all process!"