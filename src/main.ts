import * as core from '@actions/core'
import {joinPath} from './join-path'

async function run(): Promise<void> {
  try {
    const pathComponents: string | string[] = core.getInput('path')

    const joined = joinPath(pathComponents)

    core.setOutput('path', joined)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
