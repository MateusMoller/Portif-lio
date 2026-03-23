const DAY_IN_MS = 1000 * 60 * 60 * 24

function normalizeText(value = '') {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export function isPortfolioRepository(repositoryName = '') {
  const normalizedName = normalizeText(repositoryName)
  return normalizedName.includes('portif') || normalizedName.includes('portfolio')
}

export function isProfileRepository(repositoryName = '', username = '') {
  return normalizeText(repositoryName) === normalizeText(username)
}

export function extractGithubUsername(githubUrl = '') {
  if (!githubUrl) {
    return ''
  }

  try {
    const url = new URL(githubUrl)
    return url.pathname.split('/').filter(Boolean)[0] ?? ''
  } catch {
    return githubUrl.replace(/^https?:\/\//i, '').split('/').filter(Boolean)[0] ?? ''
  }
}

export function formatGithubDate(value) {
  if (!value) {
    return 'data indisponivel'
  }

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return 'data indisponivel'
  }

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date)
}

function buildRepositoryStatus(lastPushAt) {
  if (!lastPushAt) {
    return 'Sem historico de atualizacao'
  }

  const daysSincePush = Math.floor((Date.now() - new Date(lastPushAt).getTime()) / DAY_IN_MS)

  if (daysSincePush <= 7) {
    return 'Atualizado esta semana'
  }

  if (daysSincePush <= 30) {
    return 'Atualizado este mes'
  }

  return `Atualizado em ${formatGithubDate(lastPushAt)}`
}

export function normalizeFallbackProjects(projects = []) {
  return projects
    .filter((project) => !isPortfolioRepository(project.name))
    .map((project, index) => ({
      ...project,
      featured: project.featured ?? index < 2,
    }))
}

export function mapGithubRepoToProject(repository, index) {
  const lastPushAt = repository.pushed_at || repository.updated_at
  const stack = [repository.language, ...(repository.topics || []).slice(0, 4)].filter(Boolean)

  return {
    name: repository.name,
    description: repository.description || 'Repositorio sem descricao publica no GitHub ate o momento.',
    repositoryUrl: repository.html_url,
    status: buildRepositoryStatus(lastPushAt),
    context: `Ultimo push registrado em ${formatGithubDate(lastPushAt)}.`,
    stack: stack.length ? stack : ['Sem stack declarada'],
    highlightPoints: [
      `Branch principal: ${repository.default_branch || 'main'}.`,
      repository.open_issues_count
        ? `${repository.open_issues_count} issue(s) aberta(s) no momento.`
        : 'Sem issues abertas no momento.',
      repository.stargazers_count
        ? `${repository.stargazers_count} estrela(s) no GitHub.`
        : 'Repositorio publico no GitHub.',
    ],
    sourceNote: 'Dados sincronizados automaticamente da API publica do GitHub.',
    featured: index < 2,
    dataLimited: repository.size === 0,
    updatedAt: lastPushAt,
  }
}
