define('docs/renderers/Form/File.md', function(require, exports, module) {

  module.exports = {
    "html": "<h3><a class=\"anchor\" name=\"file\" href=\"#file\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>File</h3><p>用来负责文件上传，文件上传成功后会返回文件地址，这个文件地址会作为这个表单项的值，整个表单提交的时候，其实提交的是文件地址，文件上传已经在这个控件中完成了。</p>\n<ul>\n<li><code>type</code> 请设置成 <code>file</code></li>\n<li><code>reciever</code> 默认 <code>/api/upload/file</code> 如果想自己存储，请设置此选项。(PS: 如果想存自己的 bos, 系统配置中可以直接填写自己的 bos 配置。)</li>\n<li><code>accept</code> 默认支持所有类型，如果限制只能选某些类型的文件，请配置此属性为文件后缀名<code>.xxx</code><ul>\n<li>例如：<code>.png</code>；</li>\n<li>也可以配置多个，用逗号分隔：<code>.mp3,.mp4</code>。</li>\n</ul>\n</li>\n<li><code>maxSize</code> 默认没有限制，当设置后，文件大小大于此值将不允许上传。</li>\n<li><code>multiple</code> 是否多选。</li>\n<li><code>maxLength</code> 默认没有限制，当设置后，一次只允许上传指定数量文件。</li>\n<li><code>joinValues</code> 多选时是否将多个值用 <code>delimiter</code> 连接起来。</li>\n<li><code>extractValue</code> 默认为 <code>false</code>, <code>joinValues</code>设置为<code>false</code>时生效, 开启后将选中的选项 value 的值封装为数组，作为当前表单项的值。</li>\n<li><code>delimiter</code> 链接符</li>\n<li><code>autoUpload</code> 是否选择完就自动开始上传，默认为 <code>true</code></li>\n<li><code>fileField</code> 默认 <code>file</code>, 如果你不想自己存储，则可以忽略此属性。</li>\n<li><code>downloadUrl</code> 默认显示文件路径的时候会支持直接下载，可以支持加前缀如：<code>http://xx.dom/filename=</code> ，如果不希望这样，可以把当前配置项设置为 <code>false</code>。</li>\n<li><code>useChunk</code> 默认为 <code>auto</code>，amis 所在服务器，限制了文件上传大小不得超出 10M，所以 amis 在用户选择大文件的时候，自动会改成分块上传模式。</li>\n<li><code>chunkSize</code> 分块大小，默认为 5M.</li>\n<li><code>startChunkApi</code> 默认 <code>/api/upload/startChunk</code> 想自己存储时才需要关注。</li>\n<li><code>chunkApi</code> 默认 <code>/api/upload/chunk</code> 想自己存储时才需要关注。</li>\n<li><code>finishChunkApi</code> 默认 <code>/api/upload/finishChunk</code> 想自己存储时才需要关注。</li>\n<li><code>autoFill</code> 将上传成功后接口返回值的某个字段，自动填充到表单中某个表单项中，只在单选时有效<ul>\n<li>配置<code>&quot;autoFill&quot;: {&quot;filename&quot;: &quot;${filename}&quot;}</code>，表示将选中项中的<code>filename</code>的值，自动填充到当前<code>name</code>为<code>filename</code>的表单项中</li>\n</ul>\n</li>\n<li><strong>还有更多通用配置请参考</strong> <a href=\"/amis/docs/renderers/Form/FormItem\">FormItem</a></li>\n</ul>\n<div class=\"amis-preview\" style=\"height: 450px\"><script type=\"text/schema\" height=\"450\" scope=\"form-item\">{\n  \"type\": \"file\",\n  \"name\": \"file\",\n  \"label\": \"File\",\n  \"maxSize\": 1048576\n}\n</script></div>\n<p>如果不希望 File 控件接管上传，可以配置 <code>asBlob</code> 或者 <code>asBase64</code> 这两个属性（二选一），采用这种方式后，File 控件不再自己上传了，而是直接把文件数据作为表单项的值，文件内容会在 Form 表单提交的接口里面一起带上。</p>\n<h3><a class=\"anchor\" name=\"%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E\" href=\"#%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>接口说明</h3><p>开始之前请你先阅读<a href=\"/amis/docs/renderers/api\">整体要求</a>。</p>\n<h4><a class=\"anchor\" name=\"reciever\" href=\"#reciever\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>reciever</h4><p>用来自己实现文件接收</p>\n<p><strong>发送：</strong></p>\n<p>POST 方式，内容体为 form-data/multipart 格式。文件的字段名为 file。</p>\n<p><strong>响应：</strong></p>\n<p>常规返回格式如下：</p>\n<pre><code class=\"lang-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"status\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"msg\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"value\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"一般为文件的下载地址\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n\n\n<div class=\"m-t-lg b-l b-info b-3x wrapper bg-light dk\">文档内容有误？欢迎大家一起来编写，文档地址：<i class=\"fa fa-github\"></i><a href=\"https://github.com/baidu/amis/tree/master/docs/renderers/Form/File.md\">/docs/renderers/Form/File.md</a>。</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "File",
          "fragment": "file",
          "fullPath": "#file",
          "level": 3
        },
        {
          "label": "接口说明",
          "fragment": "%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E",
          "fullPath": "#%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E",
          "level": 3,
          "children": [
            {
              "label": "reciever",
              "fragment": "reciever",
              "fullPath": "#reciever",
              "level": 4
            }
          ]
        }
      ],
      "level": 0
    }
  };

});
