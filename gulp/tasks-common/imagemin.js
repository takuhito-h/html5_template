/*------------------------------------------------------------------------------------------------

    imagemin

------------------------------------------------------------------------------------------------*/
import { task, src, dest } from 'gulp';
import imagemin from "gulp-imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
task("imagemin", () => {
    return src(["*/*/img/**/*.{png,jpg,gif,svg}"])
        .pipe(
            imagemin([
                imageminPngquant({
                    quality: [0.65, 0.8], // 画質
                    speed: 1, // 最低のスピード
                    floyd: 0, // ディザリングなし
                }),
                imageminMozjpeg({
                    quality: 85, // 画質
                    progressive: true,
                }),
                imagemin.svgo({
                    plugins: [
                        // viewBox属性を削除する（widthとheight属性がある場合）。
                        // 表示が崩れる原因になるので削除しない。
                        { removeViewBox: false },
                        // <metadata>を削除する。
                        // 追加したmetadataを削除する必要はない。
                        { removeMetadata: false },
                        // SVGの仕様に含まれていないタグや属性、id属性やversion属性を削除する。
                        // 追加した要素を削除する必要はない。
                        { removeUnknownsAndDefaults: false },
                        // コードが短くなる場合だけ<path>に変換する。
                        // アニメーションが動作しない可能性があるので変換しない。
                        { convertShapeToPath: false },
                        // 重複や不要な`<g>`タグを削除する。
                        // アニメーションが動作しない可能性があるので変換しない。
                        { collapseGroups: false },
                        // SVG内に<style>や<script>がなければidを削除する。
                        // idにアンカーが貼られていたら削除せずにid名を縮小する。
                        // id属性は動作の起点となることがあるため削除しない。
                        { cleanupIDs: false },
                    ],
                }),
                imagemin.optipng(),
                imagemin.gifsicle(),
            ])
        )
        .pipe(dest("./"));
});
