import { useSettings } from '@uxshop/storefront-react/lib/hooks/use-settings'
import { useSections } from '@uxshop/storefront-react/lib/hooks/use-sections'
import { useUser } from '@uxshop/storefront-react/lib/hooks/use-user'
import { Sections } from '@uxshop/storefront-react/lib/components/sections'
import { UxVideo } from '@uxshop/storefront-react'
import { UxTextImage } from '@uxshop/storefront-react'
import { UxTestimonials } from '@uxshop/storefront-react'
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

    const testimonialsSettings = {
        title: 'testando título testimonials',
        description: 'testando descrição testimonials'
    }

    const testimonialsBlocks = [
        {
            customer: {
                name: 'Nome do cliente',
                icon: 'https://dooca.com.br/assets/img/home/leandro-schimitt.png'
            },
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at velit et orci ultricies tincidunt. Aenean imperdiet orci tortor, vel semper orci blandit at. Mauris vehicula nec est id tempus. Quisque ac risus at nisi bibendum porttitor'
        },
        {
            customer: {
                name: 'Nome do cliente',
                icon: 'https://dooca.com.br/assets/img/home/leandro-schimitt.png'
            },
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at velit et orci ultricies tincidunt. Aenean imperdiet orci tortor, vel semper orci blandit at. Mauris vehicula nec est id tempus. Quisque ac risus at nisi bibendum porttitor'
        },
        {
            customer: {
                name: 'Nome do cliente',
                icon: 'https://dooca.com.br/assets/img/home/leandro-schimitt.png'
            },
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at velit et orci ultricies tincidunt. Aenean imperdiet orci tortor, vel semper orci blandit at. Mauris vehicula nec est id tempus. Quisque ac risus at nisi bibendum porttitor'
        },
        {
            customer: {
                name: 'Nome do cliente',
                icon: 'https://dooca.com.br/assets/img/home/leandro-schimitt.png'
            },
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at velit et orci ultricies tincidunt. Aenean imperdiet orci tortor, vel semper orci blandit at. Mauris vehicula nec est id tempus. Quisque ac risus at nisi bibendum porttitor'
        }
    ]

    return (
        <div className="App">
            <h1>Teste {user && user.data.email}</h1>
            <UxVideo settings={dataVideo} />
            <UxTextImage settings={dataUxTextImage} />
            <UxTestimonials settings={testimonialsSettings} blocks={testimonialsBlocks} />
            <Sections components={components} />
        </div>
    )
}

export default App
