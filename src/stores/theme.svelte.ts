// export let theme = $state('dark')
// export let isSolar = $state('')


export function themeRender() {
    let light = true, solar = false

    $effect(() => {
        light = localStorage.getItem('light') ? JSON.parse(localStorage.getItem('light')!) : true
        solar = localStorage.getItem('solar') ? JSON.parse(localStorage.getItem('solar')!) : false
        theme.light = light
        theme.solar = solar
    })

    const theme = $state({ light: light, solar: solar })

    return {
        get light() { return theme.light },
        get solar() { return theme.solar },
        toggleLight: () => {
            theme.light = !theme.light;
            localStorage.setItem('light', String(theme.light))
            console.log(localStorage.getItem('light'))
        },
        toggleSolar: () => {
            theme.solar = !theme.solar
            localStorage.setItem('solar', String(theme.solar))

        }
    }

}