// export let theme = $state('dark')
// export let isSolar = $state('')

export function themeRender() {
    const theme = $state({ light: true, solar: false })

    return {
        get light() { return theme.light },
        get solar() { return theme.solar },
        toggleLight: () => theme.light = !theme.light,
        toggleSolar: () => theme.solar = !theme.solar
    }
}