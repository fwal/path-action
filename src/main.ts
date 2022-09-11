import * as core from '@actions/core'
import {joinPath} from './join-path'

async function run(): Promise<void> {
  try {
    const path: string = core.getInput('path')
    const separator: string = core.getInput('separator')

    const joined = joinPath(path.split(separator))

    core.setOutput('path', joined)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
