import { useSettings } from '@uxshop/storefront-react/lib/hooks/use-settings'
import { useSections } from '@uxshop/storefront-react/lib/hooks/use-sections'
import { useUser } from '@uxshop/storefront-react/lib/hooks/use-user'
import { Sections } from '@uxshop/storefront-react/lib/components/sections'
import { UxVideo } from '@uxshop/storefront-react'
import { UxTextImage } from '@uxshop/storefront-react'
import { UxBanners } from '@uxshop/storefront-react'
import { useEffect } from 'react'
import Html from './components/html'

const components = {
    html: Html
}

const get = async (id: string) => {
    console.log(`result ${id}`, '')
}

function Header() {
    useEffect(() => {
        const get = async (id: string) => {
            console.log('')
        }
        get('header')
    }, [])
    return <h1>Hello </h1>
}

function App() {
    const setting = useSettings()
    const sections = useSections()
    const user = useUser({ email: 'diovani@dooca.com.br', password: 'Teste123' })

    const dataVideo = {
        title: 'teste',
        description: 'teste',
        url: 'https://youtu.be/YD5hBvZ9fFo'
    }

    const dataUxTextImage = {
        title: 'testando título',
        description: 'testando descrição',
        buttonHref: 'https://www.dooca.com.br',
        buttonLabel: 'criar loja virtual',
        image: 'https://dooca.com.br/assets/img/home/venda-no-instagram-e-google.jpg',
        side: 'left'
    }

    const dataUxBanners = [
        {
            srcMobile: 'https://cdn.dooca.store/2617/files/b3-1.jpg',
            srcDesktop: 'https://cdn.dooca.store/2617/files/hero2.jpg'
        },
        {
            srcMobile: 'https://cdn.dooca.store/2617/files/b3-1.jpg',
            srcDesktop: 'https://cdn.dooca.store/2617/files/hero2.jpg'
        }
    ]

    return (
        <div className="App">
            <h1>Teste {user && user.data.email}</h1>
            <UxVideo settings={dataVideo} />
            <UxTextImage settings={dataUxTextImage} />
            <UxBanners blocks={dataUxBanners} />
            <Sections components={components} />
        </div>
    )
}

export default App
