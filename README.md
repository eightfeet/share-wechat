### Install
```sh
    npm i share-wechat
```

### Validate Usage

```jsx
    import wechat, { isWeChat, wechatShare } from 'share-wechat';

    export default class Home extends Component {
        componentDidMount () {
            wechat({
                appId:"wx131a2112efd76636",
                nonceStr:"4eb74bb9-53b7-4eb4-96...",
                signature:"c859696a20f6a40e6929...",
                timestamp:"1513240727...",
                url:"url"
            }, {
                data : {
                    title: '分享标题', 
                    desc: '分享描述', 
                    link: '分享链接', 
                    imgUrl: '分享图标', 
                },
                success: {

                },
                cancel: {

                }
            }).then(() => {
                console.log('success');
            }).catch(() => {
                ...
            });
        }

        render() {
            ...
        }
    }

```
### Api

#### wechat(configs, shareData, url)    
属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
|  configs | 微信config参数，{ debug, appId, timestamp, nonceStr, signature, jsApiList('默认包含所有分享') } |  Object | 必填  |    
| shareData  | 分享参数，同下面 wechatShare 参数, { data, success, cancel } | Object  |  非必填 |    
| url  | 微信的引入JS文件，默认为 http://res.wx.qq.com/open/js/jweixin-1.0.0.js | string  |  非必填 |     

#### wechatShare(data, success, cancel)    
属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
|  data | 微信分享设置，{ title, link, imgUrl, desc } |  Object | 必填  |    
| success  | 分享成功回调 | function  |  非必填 |    
| cancel  | 取消分享回调 | function  |  非必填 |     

#### isWeChat()    
判断是否微信环境